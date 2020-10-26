import React from "react";

class Following extends React.Component{
    render(){
        const {followers}=this.props;
        const url=followers.url;
        return(<div>
        <div>
            {/* followers.map((fl)=>{
            <img src="" alt=""/>
        }
        ) */}
        </div>
        <div>following</div>);
        </div>
    }
}
export default Following;