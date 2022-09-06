import React from "react";
import './Sidebar.css'

export class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <img src='https://i.imgur.com/Kx2Mh8r.jpg' className="headshot mt-3"></img>
        <h2 className="text-center mt-2 mb-0">Caleb Elliott</h2>
        <p className="text-center text-success mb-3">Software Developer || Blogger</p>
        <p>I'm glad you've found your way to my page! I am an experienced software developer </p>
      </div>
    )
  }
}