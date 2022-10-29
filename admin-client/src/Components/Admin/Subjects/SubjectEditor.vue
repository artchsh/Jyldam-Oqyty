<template>
    <form class="">
        <label for="id">ID:</label>
        <input class="" v-model="subject._id" label="id" disabled />
        <label for="Title">Предмет:</label>
        <input class="" v-model="subject.title" label="Title" required />
        <label for="">Последнее обновление:</label>
        <input class="" v-model="subject.updateDate" label="Update Date" disabled />
        <label for="">Уровень доступа</label>
        <select class="" v-model="subject.accessLevel" label="Access Level" required>
            <option value="0">Демо</option>
            <option value="1">Пользователь</option>
            <option value="3">Модератор</option>
        </select>
        <button class="" type="button" @click="sendData">Save</button>
    </form>
    <form class="m-2">
        <label for="">ID:</label>
        <input class="" v-model="theme._id" disabled />
        <label for="">Название темы:</label>
        <input class="" v-model="theme.title" required />
        <label for="">Текст:</label>
        <textarea class="" rows="6" v-model="theme.text" required />
        <label for="">Ссылка на видео по теме:</label>
        <input class="" v-model="theme.video" required />
    </form>
    <form class="" style="height: fit-content;" v-for="(link, i) in theme.links" :key="i">
        <label for="">ID:</label>
        <input class="" v-model="link._id" disabled />
        <label for="">Название ссылки:</label>
        <input class="" v-model="link.name" required />
        <label for="">Ссылка:</label>
        <input class="" v-model="link.link" required />
        <label for="">Тип ссылки:</label>
        <select class="form-select" v-model="link.type" required>
            <option value="gforms">Google Формы</option>
            <option value="yadisk">Яндекс Диск</option>
        </select>
        <button class="" type="button" @click="removeLink(theme._id, link)">
            -
        </button>
    </form>
    <button class="" type="submit" @click="addLink(theme._id)">
        +
    </button>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
import config from '../../../../../secrets/config.js'
export default {
    name: 'SubjectEdit',
    components: {},
    data: function () {
        return {
            subject: {
                _id: '',
                title: '',
                updateDate: '',
                accessLevel: '',
                themes: [],
                price: []
            },
            link: {
                name: '',
                index: '',
                link: '',
                type: ''
            },
            arrayOfLinks: [],
            theme: {
                _id: '',
                title: '',
                text: '',
                links: [],
            },
            arrayOfThemes: [],
            id: '',
            title: '',
            updateDate: '',
            accessLevel: '',
            price: [],
            responsePost: '',
        }
    },
    methods: {
        async sendData() {
            moment.locale('ru')
            this.subject.themes = this.arrayOfThemes
            this.subject.updateDate = moment().format('LLL')
            this.responsePost = await axios({
                url: `${config.api.ip}/api/subjects/find/${this.$route.params.id}`,
                method: 'patch',
                data: this.subject
            })
        },
        addLink(themeID) {
            for (const index in this.arrayOfThemes) {
                if (this.arrayOfThemes[index]._id == `${themeID}`) {
                    this.arrayOfThemes[index].links.push({
                        name: '',
                        index: '',
                        link: '',
                        type: ''
                    })
                }
            }
        },
        removeLink(themeID, link) {
            for (const index in this.arrayOfThemes) {
                if (this.arrayOfThemes[index]._id == `${themeID}`) {
                    let linksArray = this.arrayOfThemes[index].links
                    let linkToDeleteIndex = linksArray.indexOf(link);
                    if (linkToDeleteIndex > -1) {
                        linksArray.splice(linkToDeleteIndex, 1);
                    }
                }
            }
        }
    },
    async created() {
        this.responsePost = await axios({
            url: `${config.api.ip}/api/subjects/find/${this.$route.params.id}`,
            method: 'get'
        })
        let response = this.responsePost.data

        // Subject total
        this.subject = {
            _id: response._id,
            title: response.title,
            updateDate: response.updateDate,
            accessLevel: response.accessLevel,
            themes: response.themes,
            price: response.subject
        }

        // Theme total
        for (const index in this.subject.themes) {
            let theme = this.subject.themes[index]
            this.theme = {
                _id: theme._id,
                title: theme.title,
                text: theme.text,
                video: theme.video,
                links: theme.links
            }
            this.arrayOfThemes.push(this.theme)

            // Link total
            // for (const i in this.theme.links) {
            //     let link = this.theme.links[i]
            //     this.link = {
            //         name: link.name,
            //         index: i,
            //         link: link.link,
            //         type: link.type
            //     }
            //     this.arrayOfLinks.push(this.link)
            // }
        }
    }
}
</script>
<style scoped>

</style>