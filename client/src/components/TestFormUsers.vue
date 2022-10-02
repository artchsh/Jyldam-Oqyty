<template>
    <div class="wrapper" style="width: 500px;">
        <div class="bg-grey-darken-4 text-white ma-2 pa-2 rounded-lg">
            <v-form ref="form" v-model="valid">
                <v-text-field v-model="login" label="Login" required></v-text-field>
                <v-text-field v-model="name" label="Name" required></v-text-field>
                <v-text-field v-model="surname" label="Surname" required></v-text-field>
                <v-text-field v-model="email" label="E-mail" required></v-text-field>
                <v-text-field v-model="password" label="Password" required></v-text-field>
                <v-text-field v-model="phoneNumber" label="Phone number" required></v-text-field>
                <v-btn color="success" class="mr-4" @click="sendData">
                    Register
                </v-btn>
            </v-form>
        </div>
        <div class="bg-grey-darken-4 text-white text-center ma-2 pa-2 rounded-lg">
            <h1>Response</h1>
            <p>{{ responsePost }}</p>
        </div>
        <v-card class="ma-2 bg-grey-darken-4" max-width="344" v-for="user in users" :key="user._id">
            <v-card-text>
                <div>{{ user._id }}</div>
                <p class="text-h4 text--primary">
                    {{ user.name || 'No name' }} {{ user.surname }}
                </p>
                <p class="mb-1">{{ user.login || 'No login' }}</p>
                <div class="text--primary">
                    Email: {{ user.email || 'No' }}<br>
                    Password: {{ user.password || 'No' }}<br>
                    Phone Number: {{ user.phoneNumber || 'No' }}<br>
                    Access Level: {{ user.accessLevel || 'No' }}<br>
                    User Type: {{ user.userType || 'No' }}
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn text class="deep-purple-accent-4">
                    Profile
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'TestForm',
    components: {},
    data: function () {
        return {
            login: '',
            name: '',
            surname: '',
            email: '',
            password: '',
            phoneNumber: '',
            responsePost: '',
            responseUsers: '',
            users: [],
            valid: true
        }
    },
    methods: {
        async sendData() {
            this.responsePost = await axios({
                url: 'http://localhost:3000/api/users/add',
                method: 'post',
                data: {
                    name: this.name,
                    surname: this.surname,
                    login: this.login,
                    email: this.email,
                    password: this.password,
                    phoneNumber: this.phoneNumber
                }
            })
            await axios
                .get('http://localhost:3000/api/users/list')
                .then(response => this.responseUsers = response)
        }
    },
    async mounted() {
        await axios
            .get('http://localhost:3000/api/users/list')
            .then(response => this.responseUsers = response)
        let allUsers = this.responseUsers
        this.users = allUsers.data
    }
}
</script>
<style>

</style>