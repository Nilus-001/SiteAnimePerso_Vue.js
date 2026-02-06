export const useResourcesStore = defineStore('resources',{
    state:()=>({
        rMailObject:[
            {id:'contact', label:'prise de contact'}
        ],
        rUserConnected:{name:''}

    }),
    getters:{
        getNotDisable: (state) => state.rMailObject.filter((el)=> !el.disable)

    },
    actions:{


    },
})