import axios from "axios"


export default class EmployeersSevice{
    
    getEmployeers(){
        return axios.get("http://localhost:3000/Employeers")
    }
    getById(id){
        return axios.get("http://localhost:3000/Employeers?id="+id)
    }
   

}