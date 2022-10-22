<template>
    <div class="wrapper">
        <div class="user">
            <RegisterForm />
            <UsersList />
        </div>
        <div class="subject">
            <SubjectControl />
            <SubjectsList />
        </div>
    </div>
</template>
<script>
import UsersList from '@/Components/Admin/Users/UsersList.vue';
import SubjectControl from '@/Components/Admin/Subjects/SubjectCreator.vue';
import SubjectsList from '@/Components/Admin/Subjects/SubjectsList.vue';
import RegisterForm from '@/Components/Users/Authentication/RegisterForm.vue';
export default {
    name: 'ControlPanel',
    components: {
    UsersList,
    SubjectControl,
    SubjectsList,
    RegisterForm
}
}
</script>
<style scoped>
.wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: row;
}
.user, .subject {
    width: 50%;
}
</style>