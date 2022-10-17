<template>
    <div class="grid grid-cols-1 gap-6">
        <label class="block">
            <span class="text-gray-700">Логин</span>
            <input type='text'
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="login" label="Login" placeholder="">
        </label>
        <label class="block">
            <span class="text-gray-700">Пароль</span>
            <input type='password'
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="password" label="Password" placeholder="">
        </label>
        <div class="w-fit inline-block">
            <button type="button"
                class="mr-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                @click="prevent.default">
                войти
            </button>
            <router-link class="text-blue-500 hover:text-blue-700" to="/">Забыли пароль?</router-link>
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
    name: 'LoginForm',
    components: {},
    data: function () {
        return {
            login: '',
            password: '',
            responsePost: ''
        }
    },
    methods: {
        async sendData() {
            this.responsePost = await axios({
                url: 'http://localhost:3000/api/users/add',
                method: 'post',
                data: {
                    login: this.login,
                    password: this.password
                }
            })
        }
    }
}
</script>
<style scoped>

</style>