import React,{Component}from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';


class Home extends Component {
 
 render(){
    
  const {posts} = this.props
  const postList = posts.length ? (
      posts.map(post =>{
          return(
            //   <div className="post card" key={post.id}>
            //   <img src = {post.img} alt ="pokeball" />
            //   <div className="card-content">
            //   <Link to={'/' + post.id}>
            //   <span className="card-title ">{post.title}</span>
            //   {/*<p>{post.body}</p>*/}
            //   </Link>
            //   </div>
            //   </div>
       <ProductWrapper className = "col-9 mx-auto col-md-6 col-lg-3 my-3" >
       <div className="card">
       <div className="img-container p-5">
       <Link to={'/' + post.id}>
       <img src = {post.img} alt ="cellphone" className = "card-img-top"/>
       </Link>
       

    
    
    
    
    
    
    
    
    
    
       <button 
       className="cart-btn"
        disabled = {post.inCart ? true : false}
         onClick={() => {       
        console.log('you added to the cart');
          }}>
      {post.inCart ? (
        <p className="text-capitalize mb-0" disabled>
         {' '}
         in inCart        
         </p> 
       )  :  (
           <i className="fas fa-cart-plus" />
       )}
           </button>
          
    
    </div> 
      <div className="card-footer d-flex justify-content-between">
      <p className= "align-self-center mb-0">{post.title}</p>
      <h5 className = " font-italic mb-0">
      <span className = 'mr-1'>$</span>{post.price}
      
      </h5>
      
      </div>
    
    
    </div>
  
    
       </ProductWrapper> 


       
       
      

       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
            )
      })
  ) : (
      <div className = 'center'> no post  </div>
  )
  
  
  
  
    return (
<div className="container home">
<h4 className="center">Home</h4>
{postList}
</div>


    )
}
}


//how to mapStateToProps - taking the state of the store and grabbing the posts property of the store
const mapStateToProps =(state) => {
    return {
        posts : state.posts
    }
}



export default connect(mapStateToProps)(Home)

const ProductWrapper = styled.div`
.card{
	border-color:transparent;
	transition:all 1s linear;
}

.card-footer{
	background: transparent;
	border-top: transparent;
	transition: all 1s linear;
}

&:hover{
	.card{
		border:0.04rem solid rgba(0,0,0,0.2);
		box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
	}
.card-footer{
	background:rgba(247,247,247);
}

}

.img-container {
	position: relative;
    overflow: hidden;

}
.card-img-top{
	transition: all 1s linear;
}


.img-container:hover .card-img-top{
	transform: scale(1,1.2);
}
.cart-btn{
	position:absolute;
	bottom:0;
	right:0;
	padding: 0.2rem 0.4rem;
	background:lightblue;
	border:none;
	color:white;
	font-size:1.4rem;
	border-radius:0.5rem 0 0 0;
	transform:translate(100%,100%);
	transition: all 1s linear;
}

.img-container:hover .cart-btn {
	transform:translate(0,0);
    
}
.cart-btn:hover{
	color:blue;
	cursor:pointer;
}







`;