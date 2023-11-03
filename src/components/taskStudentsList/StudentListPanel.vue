<template>
    <div class="wrapper">
        <h1 class="title">Task 1</h1>
        <select-category />
        <student-list />
    </div>
</template>

<script>
import SelectCategory from './SelectCategory.vue'
import StudentList from './StudentList.vue'
export default {
    name: 'StudentListPanel',
    components: {
        SelectCategory,
        StudentList,
    },
}
</script>

<style lang="scss" scoped>
.selects {
    display: flex;
    gap: 35px;
    justify-content: center;
    align-items: center;
}
.wrapper {
    width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.title {
    font-size: 24px;
    text-align: center;
}
</style>
