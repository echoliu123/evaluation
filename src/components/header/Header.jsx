import React from "react";
import Home from "../home/Home"
import Following from "../following/Following"
import {getInfo ,getFollowers} from "../../apis/apis"
import {BrowserRouter,Route,Link} from "react-router-dom"
class Header extends React.Component{
    state={
        username:"",
        userinfo:{
            avator:"",
            githubName:"",
            followers:""
        },
        followers:[
            {
                name:"",
                avator:""
            }
        ]
    }
    handleChange=(e)=>{
        this.setState({
            username:e.target.value
        })
        console.log(this.state.username)
    }
    handleClick=()=>{
        console.log(this.state.username)
        const data=getInfo(this.state.username);
        if(data){
            this.setState({
                userinfo:{
                    avator:data.avatar_url,
                    githubName:data.login,
                    followers:data.followers
                }
            })
        }
        const followers=getFollowers(this.state.username);
        let followerarr=[];
        followers.forEach((fl)=>{
            followerarr.push(fl);
            this.setState({
                followers:followerarr
            })
        })
        
    }
    render(){
        return(
            <div>
            <input type="text" placeholder={"enter an username" }  onChange={this.handleChange}
            value={this.state.username}/>
            <button onClick={this.handleClick}>search</button>
        {<BrowserRouter>
            <Link user>Home</Link>
            <Link to="/following">Following</Link>
            <Route path="/home"  component={Home}></Route>
            <Route path="/following" component={Following}></Route>
        </BrowserRouter>}
        </div>
        )
    }
}
export default Header;