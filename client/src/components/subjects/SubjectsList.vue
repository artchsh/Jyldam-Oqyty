<script>
import axios from 'axios'
export default {
    name: 'subjectsList',
    components: {},
    data: function () {
        return {
            responseSubjects: '',
            subjects: [],
        }
    },
    methods: {},
    async mounted() {
        await axios
            .get('http://localhost:3000/api/subjects/list')
            .then(response => this.responseSubjects = response)
        let allSubjects = this.responseSubjects
        this.subjects = allSubjects.data
    }
}
</script>
<template>
    <div class="wrapper">
        <v-card class="ma-2 bg-grey-darken-4" v-for="subject in subjects" :key="subject._id">
            <v-card-text>
                <div>{{ subject._id }}</div>
                <p class="text-h4 text--primary">
                    {{ subject.title || 'No title' }}
                </p>
                <p class="mb-1">{{ subject.updateDate || 'null' }}</p>
                <div class="text--primary">
                    Access Level: {{ subject.accessLevel || 'No' }}<br>
                    subject Type: {{ subject.subjectType || 'No' }}<br>
                    Themes:<br>
                    <code v-for="(theme, i) in subject.themes" :key="i" class="text-subtitle-1">
                                Title: {{ theme.title }}<br>
                                Video: {{ theme.video }}<br>
                                links: <p v-for="(link, i) in theme.links" :key="i">{{ link }}</p><br>
                            </code>
                    Price: <p v-for="(price ,i) in subject.price" :key="i">{{ price }}
                    </p>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn text class="deep-purple-accent-4">
                    Open
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
}
</style>