import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedProblem: null,
    problems: ['A', 'B', 'C', 'D', 'E'],
    data: [
      {
        rank: 1,
        name: 'Mike',
        score: 452,
        'a': 25.0,
        'b': 51,
        'c': 49,
        'd': 42,
        'e': 96,
        'at': '1:30',
        'bt': '11:00',
        'ct': '12:00',
        'dt': '5:00',
        'et': '9:30',
        subt: '1:30',
        status: 'Accepted',
        problemTitle: 'A',
        language: 'C',
      },
      {
        rank: 2,
        name: 'Ashly',
        score: 518,
        'a': 26.0,
        'b': 65,
        'c': 7,
        'd': 6,
        'e': 0,
        'at': '5:00',
        'bt': '10:00',
        'ct': '3:00',
        'dt': '9:00',
        'et': '1:00',
        subt: '1:00',
        status: 'Wrong',
        problemTitle: 'E',
        language: 'Java',
      },
      {
        rank: 3,
        name: 'Sarah',
        score: 280,
        'a': 15,
        'b': 32,
        'c': 0,
        'd': 18,
        'e': 25,
        'at': '2:10',
        'bt': '3:45',
        'ct': '9:30',
        'dt': '2:55',
        'et': '6:20',
        subt: '2:10',
        status: 'Accepted',
        problemTitle: 'A',
        language: 'Python',
      },
    ],
  },
  getters: {
  },
  mutations: {
    setSelectedProblem(state,newValue){
      state.selectedProblem=newValue
      if(newValue){
        state.data.forEach(item=>{
          let list=Object.keys(item)
          item.problemTitle=state.selectedProblem
          item.status=item[item.problemTitle.toLowerCase()]>0 ? 'Accepted' : 'Wrong'
          item.subt=item[list[list.indexOf(item.problemTitle.toLowerCase()+'t')]]
        })
      }
    },
    setSubmissions(state){
      
    }
  },
  actions: {
  },
  modules: {
  }
})
