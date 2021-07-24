import axios from "axios"


export default class CvService{
    
    getCv(){
        return axios.get("https://localhost:44301/api/Cv")
    }
   
    getById(id){
        return axios.get("https://localhost:44301/api/Cv/"+id)
    }

}