
<template>
    <div v-for="subject in subjects" :key="subject._id" >
        <router-link class="button" :to="{ name: 'SubjectViewer', params: { subjectName: subject.title } }">
            {{ subject.title }}
        </router-link>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ListOfSubjects',
    components: {},
    data: function () {
        return {
            responseSubjects: '',
            subjects: [],
        }
    },
    methods: {},
    async created() {
        await axios
            .get('http://localhost:3000/api/subjects/list')
            .then(response => this.responseSubjects = response)
        let allSubjects = this.responseSubjects
        this.subjects = allSubjects.data
    }
}
</script>
<style scoped>
div {
    margin-top: 4rem;
}
</style>
