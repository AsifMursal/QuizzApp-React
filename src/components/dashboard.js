import React from 'react'
import PropTypes from 'prop-types'

function dashboard({user}) {
  let scores = localStorage.getItem("user");
  let userArray;
   if (scores == null) {
      userArray = [];
   }
   else {
      userArray = JSON.parse(scores);
   }
   console.log(typeof(userArray));
   let loggedUser=userArray.filter(element => element.name ===user);
   console.log(userArray);
   

  return (
    <div>dashboard {user}
    <table>
      {
        loggedUser.scores.map((score)=>{
          return <div>{score}</div>
        })
      }
      </table></div>
  )
}

export default dashboard
