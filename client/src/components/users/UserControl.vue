<template>
        <div class="bg-grey-darken-4 text-white ma-2 pa-2 rounded-lg">
            <form>
                <input v-model="login" label="Login" placeholder="login" required>
                <input v-model="name" label="Name" placeholder="name" required>
                <input v-model="surname" label="Surname" placeholder="surname" required>
                <input v-model="email" label="E-mail" placeholder="email" required>
                <input v-model="password" label="Password" placeholder="password" required>
                <input v-model="phoneNumber" label="Phone number" placeholder="phoneNumber" required>
                <button @click="sendData">
                    Register
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
            responsePost: ''
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
<style scoped>
    form {
        background-color: #666;
        width: fit-content;
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }
    input {
        display: block;
        margin-bottom: 1rem;
    }
    button {
        background-color: #777;
        padding: 16px 12px;
        color: white;
    }
</style>