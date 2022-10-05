<template>
    <div class="form">
        <div class="links-group">
            <form class="links" v-for="(link, i) in array" :key="i">
                <input v-model="link.index" disabled />
                <input v-model="link.name" required />
                <input v-model="link.link" required />
                <input v-model="link.type" required />
                <div class="btn-group">
                    <button type="submit" @click="sendData">
                        Save
                    </button>
                    <button type="button" @click="removeLink">
                        Remove
                    </button>
                </div>
            </form>
        </div>
        <button type="submit" @click="addLink">
            Add Link
        </button>

    </div>
    <!-- {{ responseAPI }} -->
</template>
<script>
import axios from 'axios'
export default {
    name: 'ThemeLinkControl',
    components: {},
    props: {
        idTheme: String,
        linksArray: Array,
        idSubject: String
    },
    data: function () {
        return {
            link: {
                name: '',
                index: '',
                link: '',
                type: ''
            },
            array: [],
            responseAPI: '',
        }
    },
    methods: {
        // async sendData() {

        //     axios.patch(`http://localhost:3000/api/subjects/find/${this.idTheme}`, {
        //         themes: {
        //             links: this.array
        //         }
        //     })
        // }
        addLink() {
            let index = this.array.length
            this.array.push({
                name: '',
                index: index,
                link: '',
                type: ''
            })
        },
        async sendData() {
            this.responsePost = await axios({
                url: `http://localhost:3000/api/subjects/find/${this.idTheme}`,
                method: 'patch',
                data: {
                    title: this.title,
                    updateDate: this.updateDate,
                    accessLevel: this.accessLevel
                }
            })
            
        }
    },
    async mounted() {
        // this.responseAPI = await axios({
        //     url: `http://localhost:3000/api/subjects/find/${this.idTheme}`,
        //     method: 'get'
        // })

        // let id = this.idTheme
        // let response = this.responseAPI.data
        // let themes = response.themes
        // let links;
        // for (const index in themes) {
        //     if (themes[index]._id === `${id}`) {
        //         let theme = themes[index]
        //         links = theme.links
        //     }
        // }
        let links = this.linksArray
        console.log('ThemesLinkControl: ')
        console.log(this.idSubject)
        console.log(this.linksArray)
        console.log(this.array)
        console.log('-------------')
        for (const i in links) {
            let link = links[i]
            this.link = {
                name: link.name,
                index: i,
                link: link.link,
                type: link.type
            }
            console.log(this.link)
            let array = this.array
            array.push(this.link)
        }
    }
}
</script>
<style scoped>
.form {
    background-color: #666;
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
    background-color: #777;
    padding: 1rem;
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

.btn-group button {
    margin-right: .5rem;
}

.links {
    display: flex;
    flex-direction: column;
    margin-left: .5rem;
}

.links-group {
    display: flex;
    flex-direction: row;
}

.button-group {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    width: 100%;
}
</style>