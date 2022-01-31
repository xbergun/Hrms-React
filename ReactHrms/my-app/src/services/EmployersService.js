import axios from "axios"


export default class EmployersService{
    
    getEmployers(){
        return axios.get("http://localhost:44301/api/EmployerController")
    }
    getById(id){
        return axios.get("http://localhost:44301/api/Employer?id="+id)
    }

}