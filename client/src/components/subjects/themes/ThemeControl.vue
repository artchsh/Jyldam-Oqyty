<template>
    <div class="wrapper">
        <div class="form">
            <form>
                <input v-model="id" disabled />
                <input v-model="title" required />
                <textarea v-model="text" required />
                <input v-model="video" required />
            </form>
            <button type="submit" @click="sendData">
                Save
            </button>
            
        </div>
        <ThemesLinkControl :idTheme="idTheme" :linksArray="arrayOfLinks" :idSubject="idSubject" />
    </div>
    <!-- {{ subjectResponse }} -->
</template>
<script>
// import axios from 'axios'
import ThemesLinkControl from './ThemesLinkControl.vue'
export default {
    name: 'ThemeControl',
    components: { ThemesLinkControl },
    props: {
        idTheme: String,
        themeObject: Object,
        idSubject: String
    },
    data: function () {
        return {
            title: '',
            text: '',
            video: '',
            subjectResponse: '',
            arrayOfLinks: []
        }
    },
    methods: {
        // async sendData() {
        //     this.subjectResponse = await axios({
        //         url: `http://localhost:3000/api/subjects/find/${this.idTheme}`,
        //         method: 'patch',
        //         data: {
        //             themes: {
        //                 _id: this.id,
        //                 title: this.name,
        //                 text: this.text,
        //             }
        //         }
        //     })
        // }
    },
    async created() {
        // this.subjectResponse = await axios({
        //     url: `http://localhost:3000/api/subjects/find/${this.idTheme}`,
        //     method: 'get'
        // })
        // let response = this.subjectResponse.data
        console.log('Theme Control')
        console.log(this.themeObject)
        console.log(`Theme id: ${this.idTheme}`)
        let theme = this.themeObject
        this.id = theme._id
        this.title = theme.title
        this.text = theme.text
        this.video = theme.video
        this.arrayOfLinks = theme.links
        console.log(this.arrayOfLinks)
        console.log('-------------')
    }
}
</script>
<style scoped>
.wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #666;
    width: fit-content;
    border-radius: 1rem;
}

.form {
    background-color: #777;
    width: fit-content;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    
}

h1 {
    text-align: center;
}

form {
    height: 100%;
}

input,
textarea {
    display: block;
    margin-bottom: 1rem;
}

button {
    background-color: #888;
    padding: 16px 12px;
    color: white;
}
</style>