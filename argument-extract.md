h1 config | 
h1 config show | 
h1 config get | -key KEY
h1 config set | -key KEY -value VALUE
h1 config unset | -key KEY
h1 user | 
h1 user create | -email EMAIL -emailCode EMAILCODE -phone PHONE -phoneCode PHONECODE -password PASSWORD
h1 user credentials | 
h1 user credentials list | 
h1 user credentials delete | -remove-id REMOVE-ID
h1 user credentials add | -name NAME -sshkey-file SSHKEY-FILE
h1 login | -password PASSWORD -username USERNAME
h1 tenant | 
h1 tenant list | 
h1 tenant show | -id ID
h1 tenant delete | -remove-id REMOVE-ID
h1 tenant list | -all ALL
h1 tenant access | 
h1 tenant access grant | -identity IDENTITY -role ROLE -id ID
h1 tenant access revoke | -identity IDENTITY -id ID
h1 tenant access list | -id ID
h1 tenant token | 
h1 tenant token list | -id ID
h1 tenant token delete | -id ID -remove-id REMOVE-ID
h1 tenant token add | -name NAME -id ID
h1 tenant token access | 
h1 tenant token access list | -token TOKEN -id ID
h1 tenant token access delete | -token TOKEN -id ID -remove-id REMOVE-ID
h1 tenant token access add | -method METHOD -path PATH -token TOKEN -id ID
h1 tenant select | -id ID
h1 tenant limit | -id ID
h1 tenant credentials | 
h1 tenant credentials list | -id ID
h1 tenant credentials delete | -id ID -remove-id REMOVE-ID
h1 tenant credentials add | -name NAME -sshkey-file SSHKEY-FILE -id ID
h1 disk | 
h1 disk list | 
h1 disk show | -id ID
h1 disk delete | -remove-id REMOVE-ID
h1 disk rename | -newname NEWNAME -id ID
h1 disk create | -name NAME -type TYPE -size SIZE -source SOURCE
h1 disk resume | -source SOURCE -id ID
h1 disk resize | -size SIZE -id ID
h1 disk download | -destination DESTINATION -id ID
h1 vm | 
h1 vm list | 
h1 vm show | -id ID
h1 vm create | -name NAME -type TYPE -password PASSWORD -username USERNAME -sshkey SSHKEY -image IMAGE -iso ISO -os-disk-name OS-DISK-NAME -os-disk-type OS-DISK-TYPE -os-disk-size OS-DISK-SIZE -os-disk OS-DISK -network NETWORK -ip IP -no-start NO-START -userdata-file USERDATA-FILE
h1 vm delete | -remove-id REMOVE-ID
h1 vm queue | -id ID
h1 vm console | -id ID
h1 vm stop | -id ID
h1 vm start | -id ID
h1 vm restart | -id ID
h1 vm turnoff | -id ID
h1 vm rename | -newname NEWNAME -id ID
h1 vm userdata | -userdata-file USERDATA-FILE -id ID
h1 vm disk | 
h1 vm disk list | -vm-id VM-ID
h1 vm disk attach | -vm-id VM-ID -disk-id DISK-ID
h1 vm disk detach | -vm-id VM-ID -disk-id DISK-ID
h1 vm nic | 
h1 vm nic list | -vm-id VM-ID
h1 vm nic show | -vm-id VM-ID -id ID
h1 vm nic delete | -vm-id VM-ID -remove-id REMOVE-ID
h1 vm nic create | -network NETWORK -type TYPE -ip IP -vm-id VM-ID
h1 vm nic delete | -vm-id VM-ID -remove-id REMOVE-ID
h1 vm nic ip | 
h1 vm nic ip list | -vm-id VM-ID -nic-id NIC-ID
h1 vm nic ip delete | -vm-id VM-ID -nic-id NIC-ID -remove-id REMOVE-ID
h1 vm nic ip add | -vm-id VM-ID -nic-id NIC-ID -ip-id IP-ID
h1 vm dvd | 
h1 vm dvd list | -vm-id VM-ID
h1 vm dvd insert | -iso ISO -vm-id VM-ID
h1 vm dvd eject | -vm-id VM-ID
h1 vm tag | 
h1 vm tag list | -id ID
h1 vm tag add | -tag TAG -id ID
h1 vm tag remove | -tag TAG -id ID
h1 vm ssh | -username USERNAME -port PORT -private PRIVATE -id ID
h1 vm serialport | 
h1 vm serialport console | -port PORT -id ID
h1 vm serialport log | -port PORT -id ID
h1 vm passwordreset | -user USER -id ID
h1 vm metrics | -id ID
h1 image | 
h1 image show | -id ID
h1 image delete | -remove-id REMOVE-ID
h1 image rename | -newname NEWNAME -id ID
h1 image create | -name NAME -description DESCRIPTION -vm-id VM-ID
h1 image list | -recommended RECOMMENDED -all ALL
h1 image disk | -id ID
h1 image access | 
h1 image access grant | -tenant-id TENANT-ID -id ID
h1 image access revoke | -tenant-id TENANT-ID -id ID
h1 image access list | -id ID
h1 iso | 
h1 iso list | 
h1 iso show | -id ID
h1 iso delete | -remove-id REMOVE-ID
h1 iso rename | -newname NEWNAME -id ID
h1 iso access | 
h1 iso access grant | -tenant-id TENANT-ID -id ID
h1 iso access revoke | -tenant-id TENANT-ID -id ID
h1 iso access list | -id ID
h1 iso resume | -source SOURCE -id ID
h1 iso create | -name NAME -source SOURCE
h1 network | 
h1 network list | 
h1 network show | -id ID
h1 network delete | -remove-id REMOVE-ID
h1 network create | -name NAME
h1 network ip | 
h1 network ip list | -network-id NETWORK-ID
h1 network ip show | -network-id NETWORK-ID -id ID
h1 network ip delete | -network-id NETWORK-ID -remove-id REMOVE-ID
h1 network ip create | -network-id NETWORK-ID
h1 ip | 
h1 ip list | 
h1 ip show | -id ID
h1 ip delete | -remove-id REMOVE-ID
h1 ip disassociate | -id ID
h1 ip associate | -private-ip PRIVATE-IP -id ID
h1 ip create | 
h1 ip ptr | -value VALUE -id ID
h1 dns | 
h1 dns zone | 
h1 dns zone list | 
h1 dns zone show | -id ID
h1 dns zone delete | -remove-id REMOVE-ID
h1 dns zone create | -name NAME
h1 dns zone export | -name NAME
h1 dns record-set | 
h1 dns record-set a | 
h1 dns record-set a list | -zone-name ZONE-NAME
h1 dns record-set a create | -name NAME -ttl TTL -zone-name ZONE-NAME -ipv4-address IPV4-ADDRESS
h1 dns record-set a delete | -name NAME -zone-name ZONE-NAME
h1 dns record-set a add-record | -name NAME -zone-name ZONE-NAME -ipv4-address IPV4-ADDRESS
h1 dns record-set a remove-record | -name NAME -zone-name ZONE-NAME -ipv4-address IPV4-ADDRESS
h1 dns record-set cname | 
h1 dns record-set cname list | -zone-name ZONE-NAME
h1 dns record-set cname create | -name NAME -ttl TTL -zone-name ZONE-NAME -cname CNAME
h1 dns record-set cname delete | -name NAME -zone-name ZONE-NAME
h1 dns record-set cname add-record | -name NAME -zone-name ZONE-NAME -cname CNAME
h1 dns record-set cname remove-record | -name NAME -zone-name ZONE-NAME -cname CNAME
h1 dns record-set txt | 
h1 dns record-set txt list | -zone-name ZONE-NAME
h1 dns record-set txt create | -name NAME -ttl TTL -zone-name ZONE-NAME -value VALUE
h1 dns record-set txt delete | -name NAME -zone-name ZONE-NAME
h1 dns record-set txt add-record | -name NAME -zone-name ZONE-NAME -value VALUE
h1 dns record-set txt remove-record | -name NAME -zone-name ZONE-NAME -value VALUE
h1 dns record-set mx | 
h1 dns record-set mx list | -zone-name ZONE-NAME
h1 dns record-set mx create | -name NAME -ttl TTL -zone-name ZONE-NAME -exchange EXCHANGE -preference PREFERENCE
h1 dns record-set mx delete | -name NAME -zone-name ZONE-NAME
h1 dns record-set mx add-record | -name NAME -zone-name ZONE-NAME -exchange EXCHANGE -preference PREFERENCE
h1 dns record-set mx remove-record | -name NAME -zone-name ZONE-NAME -exchange EXCHANGE -preference PREFERENCE
h1 dns record-set ns | 
h1 dns record-set ns list | -zone-name ZONE-NAME
h1 dns record-set ns create | -name NAME -ttl TTL -zone-name ZONE-NAME -nsdname NSDNAME
h1 dns record-set ns delete | -name NAME -zone-name ZONE-NAME
h1 dns record-set ns add-record | -name NAME -zone-name ZONE-NAME -nsdname NSDNAME
h1 dns record-set ns remove-record | -name NAME -zone-name ZONE-NAME -nsdname NSDNAME
h1 dns record-set srv | 
h1 dns record-set srv list | -zone-name ZONE-NAME
h1 dns record-set srv create | -name NAME -ttl TTL -zone-name ZONE-NAME -port PORT -priority PRIORITY -weight WEIGHT -target TARGET
h1 dns record-set srv delete | -name NAME -zone-name ZONE-NAME
h1 dns record-set srv add-record | -name NAME -zone-name ZONE-NAME -port PORT -priority PRIORITY -weight WEIGHT -target TARGET
h1 dns record-set srv remove-record | -name NAME -zone-name ZONE-NAME -port PORT -priority PRIORITY -weight WEIGHT -target TARGET
h1 dns record-set list | -zone-name ZONE-NAME
h1 service | 
h1 service list | 
h1 service show | -id ID
h1 netgw | 
h1 netgw list | 
h1 netgw show | -id ID
h1 netgw delete | -remove-id REMOVE-ID
h1 netgw access | 
h1 netgw access grant | -tenant-id TENANT-ID -id ID
h1 netgw access revoke | -tenant-id TENANT-ID -id ID
h1 netgw access list | -id ID
h1 netgw detach | -id ID
h1 netgw attach | -network NETWORK -id ID
h1 netgw create | -name NAME -ip IP
h1 firewall | 
h1 firewall list | 
h1 firewall show | -id ID
h1 firewall delete | -remove-id REMOVE-ID
h1 firewall create | -name NAME
h1 firewall attach | -network NETWORK -id ID
h1 firewall detach | -id ID
h1 firewall ingress | 
h1 firewall ingress list | -id ID
h1 firewall ingress add | -name NAME -action ACTION -priority PRIORITY -filter FILTER -external EXTERNAL -internal INTERNAL -id ID
h1 firewall ingress remove | -rule RULE -id ID
h1 firewall egress | 
h1 firewall egress list | -id ID
h1 firewall egress add | -name NAME -action ACTION -priority PRIORITY -filter FILTER -external EXTERNAL -internal INTERNAL -id ID
h1 firewall egress remove | -rule RULE -id ID
h1 vault | 
h1 vault list | 
h1 vault show | -id ID
h1 vault delete | -remove-id REMOVE-ID
h1 vault rename | -newname NEWNAME -id ID
h1 vault create | -name NAME -size SIZE -cert CERT
h1 vault access | 
h1 vault access grant | -tenant-id TENANT-ID -id ID
h1 vault access revoke | -tenant-id TENANT-ID -id ID
h1 vault access list | -id ID
h1 vault resize | -size SIZE -id ID
h1 vault credential | 
h1 vault credential cert | 
h1 vault credential cert list | -id ID
h1 vault credential cert delete | -id ID -remove-id REMOVE-ID
h1 vault credential cert add | -name NAME -sshkey SSHKEY -sshkey-file SSHKEY-FILE -id ID
h1 vault credential password | 
h1 vault credential password list | -id ID
h1 vault credential password delete | -id ID -remove-id REMOVE-ID
h1 vault credential password add | -name NAME -password PASSWORD -id ID
h1 vault ssh | -id ID
h1 vault snapshot | -name NAME -id ID
h1 snapshot | 
h1 snapshot list | 
h1 snapshot show | -id ID
h1 snapshot delete | -remove-id REMOVE-ID
h1 snapshot rename | -newname NEWNAME -id ID