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
                console.log("Update!");
                fetch("https://api.hyperone.com/v1/stats/", {mode: "no-cors"})
                    .then((response) => response.json())
                    .then((json) => {
                        console.log(vm);
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
