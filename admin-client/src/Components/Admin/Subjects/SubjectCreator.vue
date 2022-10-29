<template>
    <div class="">
        <form>
            <div class="block">
                <label>Предмет</label>
                <input class="" v-model="title" label="Title" />
            </div>
            <div class="block">
            <label>Требуемый уровень доступа</label>
            <select class="" v-model="accessLevel" label="Access Level" required>
                <option value="0">Демо</option>
                <option value="1">Пользователь</option>
                <option value="3">Модератор</option>
            </select>
            </div>
            <button type="button" class="" @click="sendData">
                Add
            </button>
        </form>
    </div>
    <div class="">
        <h1>Response</h1>
        <p>{{ responsePost }}</p>
    </div>

</template>
<script>
import axios from 'axios'
export default {
    name: 'SubjectCreator',
    components: {},
    data: function () {
        return {
            title: '',
            accessLevel: 1,
            responsePost: ''
        }
    },
    methods: {
        async sendData() {
            this.responsePost = await axios({
                url: 'http://localhost:3000/api/subjects/add',
                method: 'post',
                data: {
                    title: this.title,
                    updateDate: '',
                    accessLevel: this.accessLevel,
                    themes: []
                }
            })
            if (this.responsePost === true) {
                this.$router.push({ name: 'SubjectsControlPanelByID', params: { id: 'eduardo' } })
            }
        }
    }
}
</script>
<style scoped>
</style>