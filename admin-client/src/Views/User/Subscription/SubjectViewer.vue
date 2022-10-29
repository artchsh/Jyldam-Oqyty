<template>
    <div>
        <ul>
            <li v-for="theme in themes" :key="theme._id">
                <button v-if="theme.requiredUserType == 1" @click="showTheme(theme.title)">{{ theme.title }}</button>
            </li>
        </ul>
    </div>
    <div>
        <h1>{{ themeTitle }}</h1>
        <p>Youtube API {{ themeVideoLink }} </p>
        <p>{{ themeText }}</p>
        <div v-for="link in themeArrayOfLinks" :key="link._id">
            <p>{{ link.link }}</p>
        </div>
    </div>



    <div>
        {{responseSubjects}}
    </div>
</template>
<script>
import axios from 'axios'
import config from '../../../../../secrets/config.js'
export default {
    name: 'ListOfSubjects',
    components: {},
    data: function () {
        return {
            responseSubjects: '',
            themes: [],
            themeTitle: '',
            themeText: '',
            themeVideoLink: '',
            themeArrayOfLinks: [],
            themeID: ''
        }
    },
    methods: {
        showTheme(themeName) {
            for (var i = 0; i < this.themes.length; i++) {
                let theme = this.themes[i]
                if (theme.title == themeName) {
                    this.themeText = theme.text
                    this.themeTitle = theme.title
                    this.themeArrayOfLinks = theme.links
                }
            }
        }
    },
    async mounted() {
        // this.responseSubjects = this.$route.params.subjectName
        await axios
            .get(`${config.api.ip}/api/subjects/find/name/${this.$route.params.subjectName}`)
            .then(response => {
                this.responseSubjects = response.data
                this.themes = response.data.themes
            })
        
    }
}
</script>

