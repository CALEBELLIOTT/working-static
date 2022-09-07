import React from 'react'
import Axios from 'axios'
import { api, headers } from "../services/AxiosService"


export class About extends React.Component {

  async componentDidMount() {
    let res = await api.get('', { headers })
    console.log(res.data);
  }
  render() {
    return (
      <div className="mt-3">
        <h1 className="text-success">About Me</h1>
        <h4>Sep, 6 2022</h4>
        <img src="https://i.imgur.com/nN1dZhM.jpg" className="img-fluid" />
        <div className="post-content mt-4">
          <h4>
            Welcome!
          </h4>
          <p>
            I'm glad to find you on my web page!
          </p>
        </div>
      </div>
    )
  }
}