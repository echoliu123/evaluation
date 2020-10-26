import React from "react"
import  "./home.css"

class Home extends React.Component{
    render(){
        const {userinfo}=this.props;
        return(
            <div className="home">
                <img src={userinfo.avator}/>
                <p>{userinfo.githubName}</p>
                <p> {userinfo.followers} followers</p>

            </div>
        );
    }
}
export default Home;