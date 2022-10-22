<template>
    <!-- !!! 
        
        
        
        ERROR HANDLER 
    
    
    
    
    -->
    <div class="max-w-md">
        <div class="grid grid-cols-1 gap-6">
            <h1 class="text-3xl font-bold text-center">Регистрация</h1>
            <label class="block">
                <span class="text-gray-700">Логин</span>
                <input type='text'
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    v-model="login" label="Login" placeholder="">
            </label>
            <label class="block">
                <span class="text-gray-700">Имя</span>
                <input type='text'
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    v-model="name" label="Name" placeholder="">
            </label>
            <label class="block">
                <span class="text-gray-700">Фамилия</span>
                <input type='text'
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    v-model="surname" label="Surname" placeholder="">
            </label>
            <label class="block">
                <span class="text-gray-700">Почта</span>
                <input type='email'
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    v-model="email" label="E-mail" placeholder="">
            </label>
            <label class="block">
                <span class="text-gray-700">Пароль</span>
                <input type='password'
                    class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    v-model="password" label="Password" placeholder="">
            </label>
                <button type="button"
                    class="text-center px-6 py-2.5 bg-blue-600 text-white font-medium text-base leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    @click="sendData">
                    Зарегистрироваться
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
import config from '../../../../../secrets/config.js'
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
                url: `${config.api.ip}/api/auth/register`,
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