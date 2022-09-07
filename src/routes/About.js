import React from 'react'
import Axios from 'axios'
import { useOutletContext } from "react-router-dom";
import { api, headers } from "../services/AxiosService"


export class About extends React.Component {

  constructor(props) {
    super(props)
    this.state = { posts: {} }
  }
  async componentDidMount(props) {
    // let res = await api.get('', { headers })
    // console.log(res.data);
    await this.getPosts()
    this.drawPost()
  }

  async getPosts() {
    const res = await api.get('/1')
    console.log(res.data);
    this.setState({
      posts: res.data
    })
    document.getElementById('aboutMePost').innerHTML = res.data.content.rendered
  }

  drawPost() {
    console.log(this.state.posts);
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
        <div id="aboutMePost">
        </div>
      </div>

    )
  }
}

// export function About() {
//   let posts = useOutletContext()
//   console.log(posts)

//   return (
//     <div className="mt-3">
//       <h1 className="text-success">About Me</h1>
//       <h4>Sep, 6 2022</h4>
//       <img src="https://i.imgur.com/nN1dZhM.jpg" className="img-fluid" />
//       <div className="post-content mt-4">
//         <h4>
//           Welcome!
//         </h4>
//         <p>
//           I'm glad to find you on my web page!
//         </p>
//       </div>

//     </div>
//   )
// }