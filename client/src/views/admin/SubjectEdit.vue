<template>
    <div class="wrapper-view">
        <form class="control">
            <input v-model="id" label="id" disabled />
            <input v-model="title" label="Title" required />
            <input v-model="updateDate" label="Update Date" required />
            <input v-model="accessLevel" label="Access Level" required />
            <button type="submit" @click="sendData">
                Save
            </button>
        </form>
        <div class="control" v-for="(theme, i) in arrayOfThemes" :key="i">
            <ThemeControl :idTheme="theme._id" :themeObject="arrayOfThemes[i]" :idSubject="this.$route.params.id" />
        </div>
        <!-- <div class="theme" v-for="(theme, i) in themes" :key="i">
            <h2>{{ theme.title }}</h2>
            <p>{{ theme.video }}</p>
            <div class="links" v-for="(link, i) in theme.links" :key="i">
                <p>{{ link.name }} - {{ link.link }}</p>
            </div>
            <a :href="'./themes/edit/'+id+'/'+theme._id">Edit</a>
        </div> -->
    </div>
        <p>{{ responsePost }}</p>
    
    
</template>
<script>
import axios from 'axios'
import ThemeControl from '@/components/subjects/themes/ThemeControl.vue'
export default {
    name: 'SubjectEdit',
    components: { ThemeControl },
    data: function () {
        return {
            id: '',
            title: '',
            updateDate: '',
            accessLevel: '',
            links: [],
            price: [],
            responsePost: '',
            arrayOfThemes: []
        }
    },
    methods: {
        async sendData() {
            this.responsePost = await axios({
                url: `http://localhost:3000/api/subjects/find/${this.$route.params.id}`,
                method: 'patch',
                data: {
                    title: this.title,
                    updateDate: this.updateDate,
                    accessLevel: this.accessLevel
                }
            })
            
        }
    },
    async created() {
        console.log('Subject  Edit')
        this.responsePost = await axios({
            url: `http://localhost:3000/api/subjects/find/${this.$route.params.id}`,
            method: 'get'
        })
        let response = this.responsePost.data
        this.title = response.title
        this.updateDate = response.updateDate
        this.accessLevel = response.accessLevel
        this.themes = response.themes
        for (const index in this.themes) {
            this.arrayOfThemes.push(this.themes[index])
            console.log(this.themes[index]._id)
        }
        
        console.log(this.arrayOfThemes)
        this.id = response._id
        console.log('-------------')
    }
}
</script>
<style scoped>
.wrapper-view {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100vh;
}
.control {
    margin: 0.5rem;
}
form {
    background-color: #666;
    width: fit-content;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
}

input {
    display: block;
    margin-bottom: 1rem;
}

button {
    background-color: #777;
    padding: 16px 12px;
    color: white;
}
</style>