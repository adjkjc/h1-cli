<template>
    <ul>
        <li v-for="category in content">
            <router-link
                    class="nav-link"
                    :to="category.path"
            >
                {{ category.title}}
            </router-link>
            <ul>
                <li v-for="resource in category.resources">
                    <router-link
                            class="nav-link"
                            :to="resource.path"
                    >
                        {{ resource.title}}
                    </router-link>
                    <ul>
                        <li v-for="guide in resource.guides">
                            <router-link
                                    class="nav-link"
                                    :to="guide.path"
                            >
                                {{ guide.title}}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    export default {
        computed: {
            content() {
                const pages = this.$site.pages;
                const guides_for_resource = resource => pages
                    .filter(x => x.path.match(`/guide/${resource.path.split("/")[2]}/${resource.path.split("/")[3].split(".")[0]}/`));

                const resources_for_category = category => pages
                    .filter(page => page.path.match(`/resource/${category.path.split("/")[2]}/.*.html`))
                    .map(resource => Object.assign(resource,
                        {
                            slug: resource.path.split("/")[3].split(".")[0],
                            guides: guides_for_resource(resource)
                        }
                    ));
                return pages
                    .filter(page => page.path.match('/resource/[^/]+/$'))
                    .map(category => Object.assign(category,
                        {
                            slug: category.path.split("/")[2],
                            resources: resources_for_category(category)
                        }
                    ));
            }
        }
    }
</script>
