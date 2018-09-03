#!/usr/bin/env bash
set -e;

if [ -z "$H1_TOKEN" ]; then
    echo "Missing H1_TOKEN environment variable.";
    exit 2;
fi;

REPO_NAME="quay.io/hyperone/rbx-static-docs";
TAG_NAME="latest";
CONTAINER_NAME="rbx-static-docs"

IMAGE_ID_FILE=$(mktemp);
trap "{ rm -f ${IMAGE_ID_FILE}; }" EXIT

# Build image
docker build -t "${REPO_NAME}:${TAG_NAME}" --iidfile "${IMAGE_ID_FILE}" . ;
# Push image
docker push "${REPO_NAME}:${TAG_NAME}";

# Get image ID in repository
IMAGE_ID=$(cat "${IMAGE_ID_FILE}" );
REPO_IMAGE=$(docker inspect "${IMAGE_ID}" --format '{{join .RepoDigests " "}}')

# Create new container
h1 container create --name "${CONTAINER_NAME}-new" --type container --image "${REPO_IMAGE}" --expose 80;

# Get info for container swap
NEW_CONTAINER_ID=$(h1 container show --container "${CONTAINER_NAME}"-new -o tsv --query '[].{id:_id}');
OLD_CONTAINER_ID=$(h1 container show --container "${CONTAINER_NAME}" -o tsv --query '[].{id:_id}');

# Swap containers
h1 container rename --container "${CONTAINER_NAME}-new" --new-name "${CONTAINER_NAME}";
h1 container delete --yes --container "${OLD_CONTAINER_ID}";