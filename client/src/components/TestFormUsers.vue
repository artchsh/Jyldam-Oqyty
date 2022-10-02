<template>
    <div class="wrapper">
        <div class="form">
            <form @submit.prevent="sendData">

                <label for="login">login</label>
                <input v-model="login" type="text" id="login" name="login">

                <label for="name">name</label>
                <input v-model="name" type="text" id="name" name="name">

                <label for="surname">surname</label>
                <input v-model="surname" type="text" id="surname" name="surname">

                <label for="email">email</label>
                <input v-model="email" type="text" id="email" name="email">

                <label for="password">password</label>
                <input v-model="password" type="text" id="password" name="password">

                <label for="phoneNumber">phoneNumber</label>
                <input v-model="phoneNumber" type="text" id="phoneNumber" name="phoneNumber">

                <input type="submit" value="Send" />
            </form>
        </div>
        <div class="json">
            <h1>Response</h1>
            <p>{{ responsePost }}</p>
        </div>
        <div class="json">
            <h1>All Users</h1>
            <p>{{ responseUsers }}</p>
        </div>
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
            responseUsers: ''
        }
    },
    methods: {
        async sendData() {
            // console.log(this.login, this.name, this.surname, this.email, this.password, this.phoneNumber);
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
                .then(reponse => this.responseUsers = reponse)
        }

    }

}
</script>
<style>
.wrapper {
    width: 100%;
}

.form {
    max-width: 100%;
    padding: 1rem;
    color: white;
    background: rgb(48, 48, 48);
    margin: .5rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
}

.json {
    max-width: 100%;
    padding: .2rem;
    color: white;
    background: rgb(48, 48, 48);
    margin: .5rem;
    border-radius: 1rem;
}

.json p {
    width: 90%;
    margin: auto;
    text-align: center;
    margin-bottom: 1rem;
}

form {
    display: inline-block;
}

label,
input {
    display: block;
    width: 200px;
}

input[type="submit"] {
    margin-top: 1rem;
    width: 200px;
}
</style>