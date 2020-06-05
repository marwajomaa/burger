import React, {Component} from 'react';
import axios from 'axios';
import Post from './post';
import FullPost from './fullPost'

class Test extends Component {

  state= { 
    data: [],
    postId: null,
    post: null
  }

  componentDidMount() {
     this.fetchPosts()
  }

  // componentDidUpdate() {
  //   this.fetchPosts()
  // }
  fetchPosts = async () => {
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const responseData = await response.data;
       this.setState({data: responseData})
      }catch(err){
       console.log(err);
       
      }
  }

  handleClick = async(id) => {
     this.setState({postId: id});
  }
    render() {
      const { data, postId, post } = this.state;
      const transformedData = data.slice(0, 4).map(post => {
        return <Post title={post.title}  body={post.body} clicked={()=>this.handleClick(post.id)} />
     })
        return(
         <section>
           {transformedData}
           <FullPost id={postId} />
         </section>
        )
    }
}

export default Test;

