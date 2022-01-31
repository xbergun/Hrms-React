import axios from "axios"


export default class JobAdvertisementService{

    getAdvertisement(){
        return axios.get("https://localhost:44301/api/JobAdvertisement")
    }
    getById(id){
        return axios.get("https://localhost:44301/api/JobAdvertisement/"+id)
    }

    
}


export const PostAdd=(jobAdvertisement) =>{
    return axios.post("https://localhost:44301/api/JobAdvertisement/",jobAdvertisement)
}