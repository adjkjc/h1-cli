<template>
    <div>
        <slot v-if="!prod"></slot>
    </div>
</template>

<script>
    export default {
        data: () => ({
            prod: true
        }),
        mounted: function() {
            this.$set(this, 'prod', window.location.hostname.endsWith("hyperone.com"));
        }
    }
</script>
