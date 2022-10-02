<template>
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
        
</template>
<script>
import axios from 'axios'
export default {
    name: 'UserControl',
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
        }
    }
}
</script>
<style></style>