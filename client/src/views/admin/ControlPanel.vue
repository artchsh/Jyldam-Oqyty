<template>
    <div class="wrapper">
        <div class="user">
            <UserControl />
            <UsersList />
        </div>
        <div class="subject">
            <SubjectControl />
            <SubjectsList />
        </div>
    </div>
</template>
<script>
import UserControl from '@/components/users/UserControl.vue';
import UsersList from '@/components/users/UsersList.vue';
import SubjectControl from '@/components/subjects/SubjectControl.vue';
import SubjectsList from '@/components/subjects/SubjectsList.vue';
export default {
    name: 'ControlPanel',
    components: {
        UserControl,
        UsersList,
        SubjectControl,
        SubjectsList
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