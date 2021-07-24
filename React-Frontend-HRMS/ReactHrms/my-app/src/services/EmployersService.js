import axios from "axios"


export default class EmployersService{
    
    getEmployers(){
        return axios.get("http://localhost:3000/Employer")
    }
    getById(id){
        return axios.get("http://localhost:3000/Employer?id="+id)
    }

}