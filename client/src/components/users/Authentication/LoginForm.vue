<template>
    <div class="">
        <label class="">
            <span class="">Логин</span>
            <input type='text'
                class=""
                v-model="login" label="Login" placeholder="">
        </label>
        <label class="block">
            <span class="">Пароль</span>
            <input type='password'
                class=""
                v-model="password" label="Password" placeholder="">
        </label>
        <div class="">
            <button type="button"
                class=""
                @click="sendData">
                войти
            </button>
            <router-link class="" to="/">Забыли пароль?</router-link>
        </div>
    </div>
    <!-- <div class="">
        <h1>Response</h1>
        <p>{{ response }}</p>
    </div> -->
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