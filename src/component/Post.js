import React, {Component} from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';

class Post extends Component {
//handleClick = () => {
    //this.props.deletePost(this.props.post.id);
   // this.props.history.push('/');
//}

    render() {
     console.log(this.props.post);
     const post = this.props.post ? (
       
    
    <PostWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
    <div className="post">
    <div className="image-container p-5">
    <img src = {this.props.post.img} alt ="cellphone" className = 'card-img-top'/>
    <h4 >{this.props.post.title}</h4>
    <h2>{this.props.post.info}</h2>
    
    
    </div> 
    
    {/*<p>{this.props.post.body}</p>*/}
       <div >
       <button>
       
       delete post
       </button>
       </div>
       </div>
       
       
       </PostWrapper>


   ) : (
       <div>no post</div>
   
       
   
       )
   
       
   
        return (

        <div className="container">
        <h4>{post}</h4>
        
        </div>

    )
}

}

//delete individual post from store
//const mapDispatchToProps = (dispatch) => {
 //  return {
 // deletePost : (id) => {dispatch({type: 'DELETE_POST',id : id} )}

  ////  }
//}







const mapStateToProps = (state, ownProps) => {
   let id = ownProps.match.params.Post_id;
   
    return {
   post:state.posts.find((post) => {
       return post.id === id
    
   })
    }
}




export default connect(mapStateToProps)(Post)



const PostWrapper = styled.div`
.img-container:hover .card-img-top{
	transform: scale(1,1.2);







`;