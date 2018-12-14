# TOC

  * [h1 container create](#h1-container-create) - Create container
  * [h1 container show](#h1-container-show) - Show container
  * [h1 container delete](#h1-container-delete) - Delete container
  * [h1 container rename](#h1-container-rename) - Rename container
  * [h1 container list](#h1-container-list) - List container
  * [h1 container history](#h1-container-history) - History of container
  * [h1 container service](#h1-container-service) - Manage your services of container
    * [h1 container service list](#h1-container-service-list) - List service for container
    * [h1 container service show](#h1-container-service-show) - Show service for container
  * [h1 container transfer](#h1-container-transfer) - Transfer container to other project
  * [h1 container tag](#h1-container-tag) - Manage your tag
    * [h1 container tag list](#h1-container-tag-list) - List tag
    * [h1 container tag add](#h1-container-tag-add) - Add a tag to container
    * [h1 container tag delete](#h1-container-tag-delete) - Delete a tag of container


# Specification

## h1 container

Manage your container

### Note

The functionality is available as part of the *Early adopters* program. Operation and interface may be changed in a non-backward compatibility manner.

## h1 container create

Create container

### Syntax

```h1 container create | --name NAME --image IMAGE --type TYPE [--env ENV [--env ENV ...]] [--entrypoint ENTRYPOINT] [--args ARGS [--args ARGS ...]] [--os-size OS-SIZE] [--data-disk DATA-DISK] [--mountpoint MOUNTPOINT [--mountpoint MOUNTPOINT ...]] [--network NETWORK] [--ip IP] [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 container create --name my-server-log
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name of log archive |
| ```--image IMAGE``` |  | Docker image path |
| ```--type TYPE``` |  | Virtual machine type name or ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--env ENV [--env ENV ...]``` |  | Environment variable as NAME=VALUE. The parameter may occur repeatedly |
| ```--entrypoint ENTRYPOINT``` |  | Overwrite the default ENTRYPOINT of the image |
| ```--args ARGS [--args ARGS ...]``` |  | Extra arguments on run of image. The parameter may occur repeatedly |
| ```--os-size OS-SIZE``` |  | Size of OS disk. Default: 10 GB |
| ```--data-disk DATA-DISK``` |  | Data disk: "type,size" or "id" |
| ```--mountpoint MOUNTPOINT [--mountpoint MOUNTPOINT ...]``` |  | Mountpoint of disk keep persistence as 'disk_path:container_path'. The parameter may occur repeatedly |
| ```--network NETWORK``` |  | Network ID or name to attach |
| ```--ip IP``` |  | IP address for Virtual machine |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 container show

Show container

### Syntax

```h1 container show | --container CONTAINER```
### Example

```bash
h1 container show --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container delete

Delete container

### Syntax

```h1 container delete | --container CONTAINER```
### Example

```bash
h1 container delete --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container rename

Rename container

### Syntax

```h1 container rename | --container CONTAINER --new-name NEW-NAME```
### Example

```bash
h1 container rename --container my-container --new-name my-renamed-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 container list

List container

### Syntax

```h1 container list | ```
### Example

```bash
h1 container list
```

## h1 container history

History of container

### Syntax

```h1 container history | --container CONTAINER```
### Example

```bash
h1 container history --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container service

Manage your services of container

## h1 container service list

List service for container

### Syntax

```h1 container service list | --container CONTAINER```
### Example

```bash
h1 container service list --container test-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container service show

Show service for container

### Syntax

```h1 container service show | --container CONTAINER --service SERVICE```
### Example

```bash
h1 container service show --service my-service --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |
| ```--service SERVICE``` |  | Service for container ID or name |

## h1 container transfer

Transfer container to other project

### Syntax

```h1 container transfer | --container CONTAINER --new-project NEW-PROJECT```
### Example

```bash
h1 container transfer --container test-container --new-project OtherProject
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |
| ```--new-project NEW-PROJECT``` |  | New name |

## h1 container tag

Manage your tag

## h1 container tag list

List tag

### Syntax

```h1 container tag list | --container CONTAINER```
### Example

```bash
h1 container tag list --container my-container
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

## h1 container tag add

Add a tag to container

### Syntax

```h1 container tag add | --container CONTAINER [--tag TAG [--tag TAG ...]]```
### Example

```bash
h1 container tag add --container test-container --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--container CONTAINER``` |  | Container ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |

## h1 container tag delete

Delete a tag of container

### Syntax

```h1 container tag delete | --tag TAG --container CONTAINER```
### Example

```bash
h1 container tag delete --container test-container --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--container CONTAINER``` |  | Container ID or name |

