<template>
    <div class="wrapper">
        <student-list-panel />
        <br />
        <div class="task-2"></div>
    </div>
</template>

<script>
import StudentListPanel from './components/taskStudentsList/StudentListPanel.vue'
export default {
    name: 'App',
    components: {
        StudentListPanel,
    },
}
</script>

<style lang="scss">
@import './assets/style/index.scss';
</style>
