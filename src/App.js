import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }

  render() {
    const { posts } = this.state;
    return (
      <div className='app'>
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Blog posts</h1>
        </div>
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-header">
              #{post.id} {post.title}
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          
            </div>
            <div className="card-body">
              <p className="card-text">{post.body}</p>
            </div>
            <div className="card-footer">
              {/* <a href="#"><i>like</i></a> */}
              <a href="#" className="btn btn-primary">Go somewhere</a>
          
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }
}
export default App;