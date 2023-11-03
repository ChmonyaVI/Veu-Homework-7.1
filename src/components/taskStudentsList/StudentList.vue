<template>
    <div class="wrapper">
        <div class="head">
            <div class="head__number">#</div>
            <div class="head__system">Студент</div>
            <div class="head__grade">Средний бал</div>
        </div>
        <template v-if="getFilteredStudentsData.length">
            <div class="container-list" v-for="student in getFilteredStudentsData" :key="student.id">
                <ul class="student-id">
                    <li>{{ student.id }}</li>
                </ul>
                <ul class="student-name">
                    <li>{{ student.name }}</li>
                </ul>
                <ul>
                    <li>{{ student.averageScore }}</li>
                </ul>
            </div>
        </template>
        <template v-else>
            <div class="empty-container">No results</div>
        </template>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'StudentsList',

    computed: {
        ...mapGetters(['getFilteredStudentsData']),
    },
    methods: {
        showStudentsData() {
            console.log(this.getFilteredStudentsData)
        },
    },
}
</script>
<style lang="scss" scoped>
.wrapper {
    margin-top: 20px;
    border: 1px solid black;
    width: 200px;
    padding: 15px;

    & .container-list {
        display: flex;
        justify-content: left;
        font-weight: 600;
        align-items: center;
        margin-bottom: 10px;
        gap: 20px;

        ul,
        li {
            list-style: none;
        }
    }

    & .empty-container {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        font-weight: 700;
        color: red;
    }
}
.head {
    display: flex;
    justify-content: left;
    margin-bottom: 20px;
    gap: 20px;
    // .head__number

    &__number {
        flex-basis: 30%;
    }

    // .head__system

    &__system {
        flex-basis: 33%;
    }
    &__grade {
    }
}

.student-id {
    flex-basis: 30%;
}
.student-name {
    flex-basis: 40%;
}
</style>
