<script>
import LoginForm from '@/components/users/Authentication/LoginForm.vue';
export default {
    name: 'LoginPage',
    components: { LoginForm },
    data: function () {
        return {}
    },
    methods: {},
    async mounted() {}
}
</script>
<template>
    <div class="justify-center items-center flex w-screen h-screen">
        <div class="border p-5 rounded-xl shadow">
            <LoginForm/>
        </div>
    </div>
</template>
<style scoped>
</style>