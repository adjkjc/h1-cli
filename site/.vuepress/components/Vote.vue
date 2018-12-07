<template>
    <div class="content vote">
        <div style="text-align: center;" class="vote-header" v-if="!clicked">
            <span class="gasurvey-question"
                  style="display: block; padding-bottom: 10px">Czy uważasz ten artykuł za przydatny?</span>
            <a href="#vote" class="vote-answer" v-on:click="voteAction">Tak</a>
            <a href="#vote" class="vote-answer" v-on:click="voteAction">Nie</a>
        </div>

        <strong v-if="clicked">Dziękujemy za opinię!</strong>
    </div>
</template>

<style lang="stylus">
    .vote-header
        padding: 8px 16px;

    .vote-answer
        padding: 8px 16px;
        display: inline-block;
        border: 2px solid #c0c0c0;
        border-radius: 5px;
        margin: 5px;
</style>
<script>
    export default {
        props: ['path', ],
        data: () => ({
            clicked: false
        }),
        mounted: function () {
            this.$nextTick(function () {
                console.log('pageProps', this.path);
            })
        },
        watch: {
            path: function () {
                this.clicked = false;
            }
        },
        methods: {
            voteAction: function (event) {
                this.clicked = true;
                if (window.ga) {
                    ga('send', 'event', 'Survey', 'vote', event.target.innerText);
                }
                console.log(`Vote in survey on : ${event.target.innerText}`);
            }
        }
    }
</script>
