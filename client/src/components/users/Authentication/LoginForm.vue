<template>
    <div class="grid grid-cols-1 gap-6">
        <label class="block">
            <span class="text-gray-700">Логин</span>
            <input type='text'
                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="login" label="Login" placeholder="">
        </label>
        <label class="block">
            <span class="text-gray-700">Пароль</span>
            <input type='password'
                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="password" label="Password" placeholder="">
        </label>
        <div class="inline-block w-fit">
            <button type="button"
                class="mr-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                @click="sendData">
                войти
            </button>
            <router-link class="text-blue-500 hover:text-blue-700" to="/">Забыли пароль?</router-link>
        </div>
    </div>
    <div class="">
        <h1>Response</h1>
        <p>{{ response }}</p>
    </div>
</template>
<script>
import axios from 'axios'
import config from '../../../../../secrets/config.js'
export default {
    name: 'LoginForm',
    components: {},
    data: function () {
        return {
            login: '',
            password: '',
            response: ''
        }
    },
    methods: {
        async sendData() {
            this.response = await axios({
                url: `${config.api.ip}/api/auth/login`,
                method: 'post',
                data: {
                    login: this.login,
                    password: this.password
                }
            })
            if(this.response.data == true) {
                console.log('Вы успешно вошли')
            } else {
                console.log('there is an error occured while connecting to server')
            }
            localStorage.setItem('userLogged', `${this.response.data}`)
        }
    },
    mounted() {
        if ( localStorage.getItem('userLogged') == 'true' ) {
            //navigate to profile page or subjects page
            console.log('Вы уже в системе')
        } else {
            //navigate to login page
            console.log('Вы не вошли в систему')
        }
    }
}
</script>
<style scoped>

</style>