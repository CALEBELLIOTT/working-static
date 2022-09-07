import Axios from 'axios'

export let api = Axios.create({

  baseURL: 'https://public-api.wordpress.com/oauth2/authorize?client_id=80729&redirect_uri=https://calebelliottcodes.com&response_type=code&blog=1234',
  timeout: 3000
})

export let headers = {
  Authorization: `Bearer bf7077bfd140`
}