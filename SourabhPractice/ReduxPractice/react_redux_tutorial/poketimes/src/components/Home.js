import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';

class Home extends Component{

    render(){
        console.log(this.props);
        const {posts}=this.props;
        const postList=posts.length?(
            posts.map(post=>{
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A Pokeball"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <span>{post.body}</span>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">No Posts Yet</div>
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                <span>{postList}</span>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        posts:state.posts
    }
}

//connect returns a HOC and that HOC wraps the Home component
export default connect(mapStateToProps)(Home);