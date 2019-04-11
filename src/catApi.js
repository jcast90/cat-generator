import axios from 'axios'

export async function fetchRandomCat() {
  // TODO - fetch json from the http://aws.random.cat/meow or a similar random cat API
  try {
    const data = await axios.get(' https://api.thecatapi.com/v1/images/search ').then(resp => {
      if (resp.status === 200) {
        return resp;
      }
    })
    return data;
  } catch (err) {
    console.log(err)
    throw new Error(err)

  }

}