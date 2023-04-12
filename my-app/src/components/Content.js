import React, { Component } from 'react'
import { savedPosts } from "../posts.json"
import css from "./css/Content.module.css"
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      posts: [],
    }
  }

  setTimer() {
    setTimeout(() => {
      this.setState({
        isLoaded: true
      })
    }, 2000)
  }

  componentDidMount() {
    this.setTimer()
    this.setState({
      posts: savedPosts
    })
  }

  handleChange = (e) => {
    const name = e.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter(post => {
      return post.name.toLowerCase().includes(name);
    })

    this.setState({
      posts: filteredPosts
    })
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor='searchinput'>Search: </label>
            <input 
              id='searchinput' 
              type='search' 
              placeholder='By Author' 
              onChange={(e) => this.handleChange(e)}
              />
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
        </div>

        <div className={css.SearchResults}>

          {this.state.isLoaded ? (
            <PostItem savedPosts={this.state.posts} />
          ) :
            (<Loader />)}

        </div>
      </div>
    )
  }
}

export default Content