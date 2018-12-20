#!/bin/bash
set -eux
CONTAINER_PREFIX=${1:-rbx-static-docs}
DOCKER_IMAGE=${2:-quay.io/hyperone/rbx-static-docs}
DNS_ZONE=${3:-"wordpress-1544848911.com."};
DNS_RECORD_SET=${4:-"."};

LOG_NAME=$(date +"$CONTAINER_PREFIX-%s");
LOG_PASS=$(openssl rand -base64 32);

CONTAINER_NAME=$(date +"$CONTAINER_PREFIX-%s");
# Create log archive
time (
    h1 log create --name "$LOG_NAME";
    h1 log credential password add --log "$LOG_NAME" --name container --password "$LOG_PASS";
)
LOG_ID=$(h1 log show -o id --log "$LOG_NAME" 2>/dev/null );

# Create site container
time (
    h1 container create --name "$CONTAINER_NAME" --type a1.nano \
    --image "$DOCKER_IMAGE" \
    --log "$LOG_ID" --log-password "$LOG_PASS";
    h1 container wait_boot --container "$CONTAINER_NAME";
    echo "VM for site boot done";
);
CONTAINER_HOST_IP=$(h1 container ip --container "$CONTAINER_NAME" --query '[].{ip:address}' -o tsv 2>/dev/null )
echo "Site host IP: $CONTAINER_HOST_IP"

# Update DNS record
time (
    h1 dns record-set a create --zone "$DNS_ZONE" --name "$DNS_RECORD_SET" --value "$CONTAINER_HOST_IP";
)
echo  "Site published at https://$DNS_RECORD_SET.$DNS_ZONE .";

# Clean up old version
h1 log list -o tsv | grep "$CONTAINER_PREFIX-" | grep -v "$LOG_NAME" | awk '{print $2}' | xargs -n 1 -P8 -r h1 log delete  --yes --log
h1 container list -o tsv | grep "$CONTAINER_PREFIX-" | grep -v "$CONTAINER_NAME" | awk '{print $2}' | xargs -n 1 -P8 -r h1 container delete --yes --container
h1 disk list -o tsv | grep "$CONTAINER_PREFIX-" | grep -v "$CONTAINER_NAME" |awk '{print $2}' | xargs -n 1 -P8 -r h1 disk delete  --yes --disk

echo  "Site published at https://$DNS_RECORD_SET.$DNS_ZONE .";
