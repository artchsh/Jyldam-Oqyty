<template>
    <div class="max-w-md mt-8">
        <div class="grid grid-cols-1 gap-6">
            <label class="block">
                <span class="text-gray-700">Логин</span>
                <input type='text' class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="login" label="Login" placeholder="login">
            </label>
            <label class="block">
                <span class="text-gray-700">Имя</span>
                <input type='text' class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="name" label="Name" placeholder="John">
            </label>
            <label class="block">
                <span class="text-gray-700">Фамилия</span>
                <input type='text' class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="surname" label="Surname" placeholder="Doe">
            </label>
            <label class="block">
                <span class="text-gray-700">Почта</span>
                <input type='email' class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="email" label="E-mail" placeholder="john@example.com">
            </label>
            <label class="block">
                <span class="text-gray-700">Пароль</span>
                <input type='password' class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="password" label="Password" placeholder="password">
            </label>
            <label class="block">
                <span class="text-gray-700">Номер телефона</span>
                <input type='text' class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="phoneNumber" label="Phone number" placeholder="phoneNumber">
            </label>
            <button type="button" class="px-2 py-3 bg-blue-600" @click="sendData">
                Register
            </button>
        </div>
    </div>
    <!-- <div class="">
        <h1>Response</h1>
        <p>{{ responsePost }}</p>
    </div> -->

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

</style>