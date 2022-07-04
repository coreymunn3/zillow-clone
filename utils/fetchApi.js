import axios from 'axios';

const baseURl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url, params) => {
  const resp = await axios.get(`${baseURl}/${url}`, {
    headers: {
      'X-RapidAPI-Key': '80c8270260msh6a2772eee24bc99p182a0bjsnfcd3daf7f241',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
    params: params,
  });
  return resp.data;
};
