<script>
import RegisterForm from '@/components/users/Authentication/RegisterForm.vue';
export default {
    name: 'RegisterPage',
    components: { RegisterForm },
    data: function () {
        return {}
    },
    methods: {},
    async mounted() { }
}
</script>
<template>
    <div class="flex items-center justify-center w-screen h-screen">
        <div class="p-5 border shadow rounded-xl w-96">
            <RegisterForm />
        </div>
    </div>
</template>
<style scoped>

</style>