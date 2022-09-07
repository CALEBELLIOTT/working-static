import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


export class BlogPost extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(props) {
    // document.getElementById(props.post.id)?.innerHTML = props.post.content
  }
  render() {
    return (
      <div id={this.props.id}>

      </div>
    )
  }
}