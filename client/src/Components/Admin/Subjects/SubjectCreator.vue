<template>
    <div class="">
        <form>
            <input class="" v-model="title" label="Title" />
            <input class="" v-model="accessLevel" label="Access Level" />
            <button type="button"
                class="" @click="sendData">
                Add
            </button>
        </form>
    </div>
    <div class="">
        <h1>Response</h1>
        <p>{{ responsePost }}</p>
    </div>

</template>
<script>
import axios from 'axios'
export default {
    name: 'SubjectCreator',
    components: {},
    data: function () {
        return {
            title: '',
            accessLevel: '',
            responsePost: ''
        }
    },
    methods: {
        async sendData() {
            this.responsePost = await axios({
                url: 'http://localhost:3000/api/subjects/add',
                method: 'post',
                data: {
                    title: this.title,
                    updateDate: '',
                    accessLevel: this.accessLevel,
                    themes: []
                }
            })
            if(this.responsePost === true){
                this.$router.push({ name: 'SubjectsControlPanelByID', params: { id: 'eduardo' } })
            }
        }
    }
}
</script>
<style>

</style>