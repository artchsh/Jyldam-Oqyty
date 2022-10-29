<template>
    <!-- !!!ERROR HANDLER-->
    <div class="">
        <div class="">
            <h1 class="">Регистрация</h1>
            <label class="block">
                <span class="">Логин</span>
                <input type='text' class="" v-model="login" label="Login" placeholder="">
            </label>
            <label class="block">
                <span class="">Имя</span>
                <input type='text' class="" v-model="name" label="Name" placeholder="">
            </label>
            <label class="block">
                <span class="">Фамилия</span>
                <input type='text' class="" v-model="surname" label="Surname" placeholder="">
            </label>
            <label class="block">
                <span class="">Почта</span>
                <input type='email' class="" v-model="email" label="E-mail" placeholder="">
            </label>
            <label class="block">
                <span class="">Пароль</span>
                <input type='password' class="" v-model="password" label="Password" placeholder="">
            </label>
                <button type="button" class="button" @click="sendData">
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