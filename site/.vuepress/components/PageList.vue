<template>
    <ul>
        <li v-for="page in pages">
            <router-link
                    class="nav-link"
                    :to="page.path"
                    :exact="exact"
            >
                {{ page.title}}
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            path_re: {
                required: true
            }
        },

        computed: {
            pages() {

                return this.$site.pages.filter(page => page.path.match(this.path_re))
            },
        },
    }
</script>
