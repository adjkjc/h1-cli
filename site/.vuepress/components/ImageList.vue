<template>
    <table>
        <tr>
            <th>Nazwa</th>
            <th>Rozmiar</th>
            <th>Ostatnia aktualizacja</th>
            <th>Uwagi</th>
        </tr>
        <tr v-if="status === 'error'">
            <td colspan="4">Pobieranie informacji nie powiodło się. Spróbuj ponownie później.</td>
        </tr>
        <tr v-if="status === 'loading'">
            <td colspan="4">Pobieranie aktualnych informacji. Proszę czekać.</td>
        </tr>
        <tr v-for="image in images">
            <td>{{image.name}}</td>
            <td>{{image.fileSize | humanSize }}</td>
            <td>{{image.createdOn | relativeTime }}</td>
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
            status: 'loading',
            images: []
        }),
        mounted: function () {
            const validator = function(name_re) {
                return function(image) {
                    return image.name.match(name_re)
                }
            };
            fetch("/api_v1/image/recommended")
                .then((response) => response.json())
                .catch(() => this.$set(this, 'status', 'error'))
                .then(data => {
                    this.$set(this, 'status', 'success');
                    this.$set(this, 'images', data.filter(validator(this.name_re)));
                });
        },
        filters: {
            relativeTime: function (value) {
                if (!value) return '';
                return moment(value).calendar()
            },
            humanSize: function (value) {
                if (!value) return '';
                return value.toFixed(2) + " GB"
            },
        }
    }
</script>
