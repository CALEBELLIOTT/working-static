import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from "./components/header/Header";
import React, { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "./components/side-bar/Sidebar";
import { api } from "./services/AxiosService";


// function App() {
//   const [posts, setPosts] = useState([]);
//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8">
//             <Outlet />
//           </div>
//           <div className="col-md-4">
//             <Sidebar />
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { posts: [] }
  }

  async componentDidMount() {
    // const res = await api.get('')
    // this.state.posts = res.data
    // console.log(this.state.posts);
  }

  render() {
    return (
      <div>
        <Header posts={this.state.posts} />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Outlet context={this.state.posts} />
            </div>
            <div className="col-md-4">
              <Sidebar />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
