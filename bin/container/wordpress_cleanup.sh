#!/bin/bash
set -ux

h1 container list -o tsv | grep 'wordpress-' | awk '{print $1}' | xargs -n 1 -P8 -r h1 container delete --yes --container
h1 log list -o tsv | grep 'wordpress-' | awk '{print $1}' | xargs -n 1 -P8 -r h1 log delete  --yes --log
h1 disk list -o tsv | grep 'wordpress-' | awk '{print $1}' | xargs -n 1 -P8 -r h1 disk delete  --yes --disk

h1 container list -o tsv | awk '{print $1}' | xargs -n 1 -P8 -r h1 container delete --yes --container

h1 log list -o tsv | awk '{print $1}' | xargs -n 1 -P8 -r h1 log delete  --yes --log
