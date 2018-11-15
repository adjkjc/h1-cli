<template>
    <div>
        <slot if="prod"></slot>
    </div>
</template>

<script>
    export default {
        data: () => {
            prod: true;
        },
        mounted: () => {
            this.$set(this, 'prod', window.location.hostname.endsWith("hyperone.com"));
        }
    }
</script>
