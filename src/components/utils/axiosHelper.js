import axios from 'axios'



 export const fetchData  = (str) => {

    const apiEp = `http://www.omdbapi.com/?t=${str}&apikey=f2b88761`;
    try{
        console.log(str);
        return axios.get(apiEp)
        
    }catch(error){
        console.log(error);
    }
}