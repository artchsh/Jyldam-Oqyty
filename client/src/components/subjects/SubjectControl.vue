<template>
    <div class="bg-grey-darken-4 text-white ma-2 pa-2 rounded-lg">
        <form>
            <input v-model="title" label="Title" required />
            <input v-model="updateDate" label="Update Date" required />
            <input v-model="accessLevel" label="Access Level" required />
            <button @click="sendData">
                Add
            </button>
        </form>
    </div>
    <div class="bg-grey-darken-4 text-white text-center ma-2 pa-2 rounded-lg">
        <h1>Response</h1>
        <p>{{ responsePost }}</p>
    </div>

</template>
<script>
import axios from 'axios'
export default {
    name: 'SubjectControl',
    components: {},
    data: function () {
        return {
            title: '',
            updateDate: '',
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
                    updateDate: this.updateDate,
                    accessLevel: this.accessLevel,
                    themes: [
                        {
                            title: "Theme 1",
                            text: "sample.",
                            video: "https://youtube.com/...",
                            links: [
                                { name: "Test 1", link: "https://google.forms/...", type: "gforms" },
                                { name: "Materials", link: "https://yadi.sk/...", type: "yadisk" }
                            ]
                        }
                    ]
                }
            })
        }
    }
}
</script>
<style>

</style>