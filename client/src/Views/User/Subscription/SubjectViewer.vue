<template>
    <div>
        {{responseSubjects}}
    </div>
</template>
<script>
export default {
    name: 'ListOfSubjects',
    components: {},
    data: function () {
        return {
            responseSubjects: '',
            subjects: [],
        }
    },
    methods: {},
    mounted() {
        this.responseSubjects = this.$route.params.subjectName
    }
}
</script>

