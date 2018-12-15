#!/bin/bash
set -eux
DB_NAME=$(date +"wordpress-db-%s");
WORDPRESS_NAME=$(date +"wordpress-php-%s");
DB_PASS=$(pwgen -B -c -n -s -1 15);
LOG_NAME=$(date +"wordpress-log-%s");
LOG_PASS=$(pwgen -B -c -n -s -1 15);
DNS_ZONE=$(date +"wordpress-%s.com");
DNS_RECORD_SET=".";

# Create log archive
time (
    h1 log create --name "$LOG_NAME";
    h1 log credential password add --log "$LOG_NAME" --name container --password "$LOG_PASS";
)
LOG_ID=$(h1 log show -o id --log "$LOG_NAME");

# Create DB container
time (
    h1 container create --name "$DB_NAME" --type a1.small --image mysql:5.7 \
    --log "$LOG_ID" --log-password "$LOG_PASS" \
    --env MYSQL_ROOT_PASSWORD="$DB_PASS" --env MYSQL_ROOT_HOST="%" \
    --data-disk 10,ssd --mountpoint mysql:/var/lib/mysql/ \
    --args '--bind-address 0.0.0.0'
    h1 container wait_boot --container "$DB_NAME";
    echo "VM for database boot done";
);
DB_HOST_IP=$(h1 container ip --container "$DB_NAME" --query '[].{ip:address}' -o tsv)
echo "Database host IP: $DB_HOST_IP"

# Create Wordpress container
time (
    h1 container create --name "$WORDPRESS_NAME" --type a1.nano --image wordpress \
        --env WORDPRESS_DB_HOST="$DB_HOST_IP" --env WORDPRESS_DB_USER="root" --env WORDPRESS_DB_PASSWORD="$DB_PASS" \
        --log "$LOG_ID" --log-password "$LOG_PASS" \
        --data-disk 10,ssd --mountpoint php:/var/www/html;
    h1 container wait_boot --container "$WORDPRESS_NAME";
    echo "VM for wordpress boot done";
)
WORDPRESS_HOST_IP=$(h1 container ip --container "$WORDPRESS_NAME" --query '[].{ip:address}' -o tsv)
echo "Wordpress host IP: $WORDPRESS_HOST_IP";

# Update DNS record
time (
    h1 dns zone create --name "$DNS_ZONE";
    h1 dns record-set a create --zone "$DNS_ZONE" --name "$DNS_RECORD_SET" --value "$WORDPRESS_HOST_IP";
)
#  Stream logs
echo "Going to stream logs";
h1 log stream --log "$LOG_NAME" --follow;