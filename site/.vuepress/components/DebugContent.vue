<template>
    <div>
        <slot if="prod"></slot>
    </div>
</template>

<script>
    export default {
        data: () => {
            prod: window.location.hostname.endsWith("hyperone.com")
        },
    }
</script>
