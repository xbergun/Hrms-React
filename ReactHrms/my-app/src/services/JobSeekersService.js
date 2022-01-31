import axios from "axios"


export default class JobSeekersService{
    
    getJobSeekers(){
        return axios.get("https://localhost:44301/api/JobSeeker")
    }
    getById(id){
        return axios.get("https://localhost:44301/api/JobSeeker/"+id)
    }

}