<script>
import axios from 'axios'
export default {
    name: 'UsersList',
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
            responseUsers: '',
            users: [],
        }
    },
    methods: {
        async updateData(id) {
            // this.responsePost = await axios({
            //     url: 'http://localhost:3000/api/users/add',
            //     method: 'post',
            //     data: {
            //         name: this.name,
            //         surname: this.surname,
            //         login: this.login,
            //         email: this.email,
            //         password: this.password,
            //         phoneNumber: this.phoneNumber
            //     }
            // })
            let els = ['name','surname','login','email','password','phoneNumber','accessLevel','userType']
            for (const element in els) {
                let value = document.getElementById(`${element}-${id}`)
                console.log(value)
            }
        }
    },
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
        <form class="card" v-for="user in users" :key="user._id">
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
                <button class="profile">Profile</button>
                <button class="delete">Delete</button>
                <button class="save" type="submit" @click="updateData(user._id)">Save</button>
            </div>
            
        </form>
    </div>
</template>
<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
}

.card {
    width: 340px;
    display: flex;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #666;
    margin: 0.2rem;
}

.card__block_1 {
    background-color: #777;
}
button {
    background-color: #888;
    color: white;
    padding: 16px 12px;
    margin-right: .5rem
}
</style>