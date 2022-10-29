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
        <div class="card" v-for="subject in subjects" :key="subject._id">
            <p>ID: {{ subject._id }}</p>
            <p>Title: {{ subject.title || 'No title' }}</p>
            <p>Update date: {{ subject.updateDate || 'null' }}</p>
            <p>Access Level: {{ subject.accessLevel || 'No' }}</p>
            <p>subject Type: {{ subject.subjectType || 'No' }}</p>
            Themes:
            <div class="card__block_1" v-for="(theme, i) in subject.themes" :key="i">
                <p>Title: {{ theme.title }}</p>
                <p>Video: {{ theme.video }}</p>
                <p>links:</p>
                <div class="card__block_2" v-for="(link, i) in theme.links" :key="i">
                    <p>Name: {{ link.name }}</p>
                    <p>Link: <a v-bind:href="link.link">{{ link.link }}</a></p>
                </div>
            </div>
            <div class="card__block_1">
                <p>Price:</p>
                <p v-for="(price, i) in subject.price" :key="i">
                    {{ Object.keys(price)[0] }} - {{ Object.values(price)[0] }}
                </p>
            </div>
            <router-link class="button" :to="{ name: 'SubjectsControlPanelByID', params: { id: subject._id } }">
                Edit
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
}

.card {
    width: 340px;
    display: flex;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #666;
    margin: 0.2rem;
}

.card__block_1 {
    background-color: #777;
    margin-bottom: 1rem
}

.card__block_2 {
    background-color: #888;
    width: fit-content;
    margin-left: 1rem;
}
</style>