


// let infoUrl=`http://api.com/users/${USERNAME}`;
const cors = `https://cors-anywhere.herokuapp.com/`;
 export const  getInfo=(USERNAME)=>
    fetch(cors+`https://api.github.com/users/${USERNAME}`,{
        method:"GET",
        headers: {
            "Access-Control-Allow-Origin": "*"
          }
    }
    ).then((res)=>{
        res.json();
    });



// const followingUrl="https://api.github.com/users/${USERNAME}/following?page=${10}&per_page=${10}"
export const getFollowers=(USERNAME)=>{
    fetch(cors+`https://api.github.com/users/${USERNAME}/following?page=${10}&per_page=${10}`,{
        method:"GET",
        headers: {
            "Access-Control-Allow-Origin": "*"
          }
    }
    ).then((res)=>{
        res.json();
    });
}
    
