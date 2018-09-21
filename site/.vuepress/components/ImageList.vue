<template>
    <table>
        <tr>
            <th>Nazwa</th>
            <th>Rozmiar</th>
            <th>Ostatnia aktualizacja</th>
            <th>Uwagi</th>
        </tr>
        <tr v-for="image in images">
            <td>{{image.title}}</td>
            <td>{{image.fileSize}}</td>
            <td>{{image.createdOn | relativeTime}}</td>
            <td><!-- TODO: License restriction --></td>
        </tr>
    </table>
</template>

<script>
    import moment from 'moment'
    import 'moment/locale/pl'
    moment.locale('pl');
    // TODO: Proxy request https://github.com/vuejs/vuepress/issues/858
    export default {
        props: {
            name_re: ''
        },
        data: () => ({
            images: []
        }),
        mounted: function () {
            fetch("https://panel.hyperone.com/api/v1/image/recommended/", {mode: "no-cors"})
                .then((response) => response.json())
                .catch(() => [])
                .then(data => {
                    this.$set(this, 'images', data);
                });
        },
        filters: {
            relativeTime: function (value) {
                if (!value) return '';
                return moment(value).calendar()
            }
        }
    }
</script>
