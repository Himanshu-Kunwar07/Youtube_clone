import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': "dd9e3dc31bmsh60cb1c4cb32df89p14d242jsnd6a30bf9e6d0",
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async(url) => {
    const {data}= await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};