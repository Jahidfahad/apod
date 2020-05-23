import axios from 'axios';


const url = "https://api.nasa.gov/planetary/apod?api_key=gxb0q5syqI4fZds0Eidg9v28ntH3o0eL0e2CAFbg";

export const fetchData = async () =>{
    try {
        const {data:{date, copyright, explanation, title, hdurl}} = await axios.get(url)
        return {date, copyright, explanation, title, hdurl};
    } catch (error) {
        console.log(error)
    }
}