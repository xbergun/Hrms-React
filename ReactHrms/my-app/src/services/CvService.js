import axios from "axios"


export default class CvService{
    
    getCv(){
        return axios.get("https://localhost:44301/api/Cv")
    }
   
    getById(id){
        return axios.get("https://localhost:44301/api/Cv/"+id)
    }

    
}

export const PostCv=(value) =>{
    return axios.post("https://localhost:44301/api/Cv/PostCv",value)
}