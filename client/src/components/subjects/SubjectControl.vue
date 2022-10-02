<template>
    <div class="bg-grey-darken-4 text-white ma-2 pa-2 rounded-lg">
        <v-form ref="form" v-model="valid">
            <v-text-field v-model="title" label="Title" required></v-text-field>
            <v-text-field v-model="updateDate" label="Update Date" required></v-text-field>
            <v-text-field v-model="accessLevel" label="Access Level" required></v-text-field>
            <v-btn color="success" class="mr-4" @click="sendData">
                Add
            </v-btn>
        </v-form>
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
        responsePost: '',
        valid: true
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
                accessLevel: this.accessLevel
            }
        })
    }
}
}
</script>
<style></style>