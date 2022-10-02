<script>
import axios from 'axios'
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
            .get('http://localhost:3000/api/users/list')
            .then(response => this.responseUsers = response)
        let allUsers = this.responseUsers
        this.users = allUsers.data
    }
}
</script>
<template>
    <div class="wrapper">
        <v-card class="ma-2 bg-grey-darken-4" v-for="user in users" :key="user._id">
            <v-card-text>
                <div>{{ user._id }}</div>
                <p class="text-h4 text--primary">
                    {{ user.name || 'No name' }} {{ user.surname }}
                </p>
                <p class="mb-1">{{ user.login || 'No login' }}</p>
                <div class="text--primary">
                    Email: {{ user.email || 'No' }}<br>
                    Password: {{ user.password || 'No' }}<br>
                    Phone Number: {{ user.phoneNumber || 'No' }}<br>
                    Access Level: {{ user.accessLevel || 'No' }}<br>
                    User Type: {{ user.userType || 'No' }}
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn text class="deep-purple-accent-4">
                    Profile
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<style scoped>
.wrapper {
    display:flex;
    flex-wrap: wrap;
}
</style>