import React, { Component } from 'react';
import axios from 'axios';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate(){
        const { id } = this.props;
        const { loadedPost } = this.state;
        if(id){
            if(!loadedPost || (loadedPost && loadedPost.id !== id)){
                this.updatePost(id)
            }
    }
}

    updatePost = async (id) => {
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const fullPost = await response.data;
            console.log(fullPost)
            //when using setState inside compomentDidUpdate it will update the state each time and call compomentDidUpdate again and again thats cause infinite requests to the server 
            //so the solution for that is to send http request and update the state just when receive new props
             this.setState({loadedPost: fullPost})
            }catch(err){
             console.log(err);
             
            }
    }

    render(){
    const { loadedPost } = this.state;
    const { id } = this.props;
    let post = <p>select a post</p>
    if(id){
       post = <p>loading</p>
    }

    if(loadedPost){
    post = (
    <article style={{margin: '10px', border: '1px solid red'}}>
        <p>{loadedPost.title}</p>
        <p>{loadedPost.body}</p>
    </article>
    )
}
return (
    <div>
    {post}
    </div>
)
}
}
export default FullPost;