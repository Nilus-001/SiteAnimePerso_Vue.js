export const useLangsStore = defineStore('lang',{
    state:()=>({
        langs:[
            {l:"Francais",icon:""},
            {l:"English",icon:""},
            {l:"Deutch",icon:""},
            {l:"Español",icon:""},
        ],

    }), 
    getters:{
        getAllLang: (state) => state.langs.map(ele => ele.l)
    },
    actions:{
        // getAllLang:(state)=> {
        //     let liste = [];
        //     state.langs.forEach(ele => {
        //         liste.push(ele.l)
        //     })
        //     return liste
        // },
    },
});