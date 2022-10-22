<script>
import axios from 'axios'
import config from '../../../../../secrets/config.js'
export default {
    name: 'UsersList',
    components: {},
    data: function () {
        return {
            responseUsers: '',
            users: [],
        }
    },
    methods: {},
    async mounted() {
        await axios
            .get(`${config.api.ip}/api/users/list`)
            .then(response => this.responseUsers = response)
        let allUsers = this.responseUsers
        this.users = allUsers.data
    }
}
</script>
<template>
    <div class="wrapper">
        <form class="h-auto p-3 border d-flex flex-column" v-for="user in users" :key="user._id">
            <label>ID: </label> 
            <input v-bind:value="user._id || 'No'" disabled>

            <label>First name: </label> 
            <input :id="`name-`+user.name" v-bind:value="user.name || 'No'" />

            <label>Last name: </label> 
            <input :id="`surname-`+user.surname" v-bind:value="user.surname || 'No'">

            <label>Login: </label> 
            <input :id="`login-`+user.login" v-bind:value="user.login || 'No'">

            <label>Email: </label> 
            <input :id="`email-`+user.email" v-bind:value="user.email || 'No'">

            <label>Password: </label> 
            <input :id="`password-`+user.password" v-bind:value="user.password || 'No' ">

            <label>Phone Number: </label> 
            <input :id="`phoneNumber-`+user.phoneNumber" v-bind:value="user.phoneNumber || 'No' ">


            <label>Access Level: </label> 
            <input :id="`accessLevel-`+user.accessLevel" v-bind:value="user.accessLevel || 'No' ">

            <label>User Type: </label>
            <input :id="`userType-`+user.userType" v-bind:value="user.userType || 'No'">

            <div class="button-group">
                <button class="profile">Edit</button>
            </div>
            
        </form>
    </div>
</template>
<style scoped>
</style>