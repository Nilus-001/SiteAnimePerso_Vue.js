export const useUserStore = defineStore('user',{
    state:()=>({
        profile: null,
        profileSaved:[],

    }), 
    getters:{
        isAuthenticated:(state)=> {!!state.profile},
    },
    actions:{
        loginUser(pseudo,password) {
            const user = this.profileSaved.find(p => p.name === pseudo && p.pwd === password)
            if (user){
                this.profile = user
                return true
            }
            return false
            
        },
        RegisterUser(user) {
            if (!(this.profileSaved.find(p => p.name === user.name))){
                this.profileSaved.push(user)
                return true
            }
            return false 
        },
        CreateUser(uName, uEmail, uPassword) {
            return {
                name: uName,
                email: uEmail,
                pwd: uPassword
            };
        },
    },
});