import { createStore } from 'vuex'
import { studentsList } from '../constans/studentsList.js'

export default createStore({
    state: {
        studentsDataList: [],
        filteredStudentsData: [],
        selectedSystemVal: 'Все',
        selectedStatusVal: 'Все',
    },
    getters: {
        getStudentsData: (state) => {
            studentsList.map((student) => {
                const systFive = student.evaluationSys === 5
                const systTwelve = student.evaluationSys === 12
                if (systFive && student.averageScore > 5) state.studentsDataList.push({ ...student, status: 'Блатнiк' })
                if (systFive && student.averageScore === 5)
                    state.studentsDataList.push({ ...student, status: 'Вiдмiннiк' })
                if (systFive && student.averageScore === 4)
                    state.studentsDataList.push({ ...student, status: 'Хорошист' })
                if (systFive && student.averageScore === 3)
                    state.studentsDataList.push({ ...student, status: 'Трiйочник' })
                if (systFive && student.averageScore <= 2)
                    state.studentsDataList.push({ ...student, status: 'Двiйочник' })
                if (systTwelve && student.averageScore > 12)
                    state.studentsDataList.push({ ...student, status: 'Блатнiк' })
                if (systTwelve && student.averageScore <= 12 && student.averageScore >= 10)
                    state.studentsDataList.push({ ...student, status: 'Вiдмiннiк' })
                if (systTwelve && student.averageScore < 10 && student.averageScore >= 6)
                    state.studentsDataList.push({ ...student, status: 'Хорошист' })
                if (systTwelve && student.averageScore < 6 && student.averageScore > 4)
                    state.studentsDataList.push({ ...student, status: 'Трiйочник' })
                if (systTwelve && student.averageScore <= 2)
                    state.studentsDataList.push({ ...student, status: 'Двiйочник' })
            })
            return state.studentsDataList
        },
        getSelectedSystemVal: ({ selectedSystemVal }) => selectedSystemVal,
        getSelectedStatusVal: ({ selectedStatusVal }) => selectedStatusVal,
        getFilteredStudentsData: (state, getters) => {
            if (state.selectedSystemVal === 'Все' && state.selectedStatusVal === 'Все')
                state.filteredStudentsData = getters.getStudentsData
            else if (state.selectedSystemVal && state.selectedStatusVal === 'Все')
                state.filteredStudentsData = getters.getStudentsData.filter(
                    (student) => student.evaluationSys === state.selectedSystemVal
                )
            else if (state.selectedSystemVal === 'Все' && state.selectedStatusVal)
                state.filteredStudentsData = getters.getStudentsData.filter(
                    (student) => student.status === state.selectedStatusVal
                )
            else
                state.filteredStudentsData = getters.getStudentsData.filter(
                    (student) =>
                        student.status === state.selectedStatusVal && student.evaluationSys === state.selectedSystemVal
                )
            return state.filteredStudentsData
        },
    },
    mutations: {
        getFilteredBySystem(state, system) {
            state.selectedSystemVal = system
        },
        getFilteredByStatus(state, status) {
            state.selectedStatusVal = status
        },
    },
    actions: {
        filteredByStatus({ commit }, status) {
            commit('getFilteredByStatus', status)
        },
        filteredBySystem({ commit }, system) {
            commit('getFilteredBySystem', system)
        },
    },
})
