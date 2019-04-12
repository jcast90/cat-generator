import axios from 'axios'

export async function fetchRandomCat() {
  try {
    const data = await axios.get(' https://api.thecatapi.com/v1/images/search ').then(resp => {
      if (resp.status === 200) {
        return resp;
      }
    })
    return data;
  } catch (err) {
    throw new Error(err)
  }
}