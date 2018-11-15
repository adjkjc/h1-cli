<template>
    <span>
        {{count}}
    </span>
</template>

<script>
    export default {
        props: {
            resource: {}
        },
        data: () => ({
            count: 37350
        }),
        mounted: function () {
            this.updateCount();
            let updateCount = this.updateCount;
            setInterval(function(){
                updateCount();
            }, 5*60*1000);
        },
        methods: {
            updateCount: function () {
                fetch("/api_v1/stats/")
                    .then((response) => response.json())
                    .then((json) => {
                        console.log(json);
                        return json[this.resource || 'vm'];
                    })
                    .catch(() => 37350)
                    .then(count => {
                        this.$set(this, 'count', count);
                    });
            }
        }
    }
</script>
