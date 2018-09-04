#!/usr/bin/env bash
set -e;
set -x;

# Usage:
# deploy.sh container_name tag_name deploy_mode

# Settings via environment variables:
# H1_TOKEN - access token to update container (required)
# BUILD_CONTEXT - context of docker build (default: . )

if [ -z "$H1_TOKEN" ]; then
    echo "Missing H1_TOKEN environment variable.";
    exit 2;
fi;

if [ -z "$(which h1)" ] ; then
    echo "Missing h1-cli executable. Install it first fg. via:";
    echo "\$ npm install -g git+https://github.com/hyperonecom/h1-cli.git#containers";
    exit 3;
fi;

H1_CLI="h1";
CONTAINER_NAME=${1:-rbx-static-docs-2}
TAG_NAME=${2:-latest};
DEPLOY_MODE=${3:-recreate} # available: recreate, swap

REPO_NAME=${REPO_NAME="quay.io/hyperone/rbx-static-docs"};
BUILD_CONTEXT=${BUILD_CONTEXT="."};


IMAGE_ID_FILE=$(mktemp);
trap "{ rm -f ${IMAGE_ID_FILE}; }" EXIT

# Build image
docker build -t "${REPO_NAME}:${TAG_NAME}" --iidfile "${IMAGE_ID_FILE}" "$BUILD_CONTEXT";
# Push image
docker push "${REPO_NAME}:${TAG_NAME}";

# Get image ID in repository
IMAGE_ID=$(cat "${IMAGE_ID_FILE}" );
REPO_IMAGE=$(docker inspect "${IMAGE_ID}" --format '{{join .RepoDigests " "}}')

if [ "$DEPLOY_MODE" == "swap" ]; then
    ${H1_CLI} container create --name "${CONTAINER_NAME}-new" --type container --image "${REPO_IMAGE}" --expose 80;

    # Get info for container swap
    OLD_CONTAINER_ID=$(h1 container show --container "${CONTAINER_NAME}" -o tsv --query '[].{id:_id}');

    # Swap containers
    ${H1_CLI} container rename --container "${CONTAINER_NAME}-new" --new-name "${CONTAINER_NAME}";
    ${H1_CLI} container delete --yes --container "${OLD_CONTAINER_ID}";
elif [ "$DEPLOY_MODE" == "recreate" ]; then
    ${H1_CLI} container create --name "${CONTAINER_NAME}-new" --type container --image "${REPO_IMAGE}" --expose 80;
    ${H1_CLI} container rename --container "${CONTAINER_NAME}" --new-name "${CONTAINER_NAME}-old";
    ${H1_CLI} container rename --container "${CONTAINER_NAME}-new" --new-name "${CONTAINER_NAME}";
    ${H1_CLI} container delete --yes --container "${CONTAINER_NAME}-old";
else
    echo "Unknown deploy mode.";
    exit 3;
fi