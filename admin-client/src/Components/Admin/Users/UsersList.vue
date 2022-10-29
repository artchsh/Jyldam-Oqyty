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
    <div class="" v-for="user in users" :key="user._id">
        <p>ID: {{user._id || '*'}}</p>
        <p>Name: {{user.name || '*'}}</p>
        <p>Surname: {{user.surname || '*'}}</p>
        <p>Login: {{user.login || '*'}}</p>
        <p>Email: {{user.email || '*'}}</p>
        <p>Password: {{user.password || '*'}}</p>
        <p>Phone number: {{user.phoneNumber || '*'}}</p>
        <p>Access Level: {{user.accessLevel || '*'}}</p>
        <p>User Type: {{user.userType || '*'}}</p>
        <div class="button-group">
            <button class="profile">Edit</button>
        </div>
    </div>
</template>
<style scoped>

</style>