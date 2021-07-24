import axios from "axios"


export default class UsersService{
    
    getUsers(){
        return axios.get("https://localhost:44301/api/users")
    }
    getById(id){
        return axios.get("https://localhost:44301/api/users/"+id)
    }

}