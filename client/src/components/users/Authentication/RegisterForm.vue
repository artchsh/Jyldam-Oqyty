<template>
    <div class="w-4">
        <form>
            <input class="form-control" v-model="login" label="Login" placeholder="login" required>
            <input class="form-control" v-model="name" label="Name" placeholder="name" required>
            <input class="form-control" v-model="surname" label="Surname" placeholder="surname" required>
            <input class="form-control" v-model="email" label="E-mail" placeholder="email" required>
            <input class="form-control" v-model="password" label="Password" placeholder="password" required>
            <input class="form-control" v-model="phoneNumber" label="Phone number" placeholder="phoneNumber" required>
            <button class="btn btn-primary w-100 mt-2" @click="sendData">
                Register
            </button>
        </form>
    </div>
    <!-- <div class="">
        <h1>Response</h1>
        <p>{{ responsePost }}</p>
    </div> -->

</template>
<script>
import axios from 'axios'
export default {
    name: 'RegisterForm',
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
                url: 'http://localhost:3000/auth/register',
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

</style>