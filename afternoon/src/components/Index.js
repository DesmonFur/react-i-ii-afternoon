import React, {Component} from 'react'

export default function Index(props){
return(
  <div>
      <div className = 'index'>  <h1> {props.name[props.index].id}/25 </h1>   
       </div> 
    
    <div className= 'content'>
            <h1 className = 'name'>
              {props.name[props.index].name.first + ' ' + props.name[props.index].name.last}
    </h1>
                <ul id="unordered">
            <li>
                <strong>From:</strong>  {props.name[props.index].city + ' ' + props.name[props.index].country}
            </li>
            <li>
                <strong>Job title: </strong>{props.name[props.index].title}
            </li>
            <li> <strong>Employer:</strong> {props.name[props.index].employer} </li>
     </ul>
    
     <ol id="ordered"> <strong>Favorite Movies:</strong>
    <li> {props.name[props.index].favoriteMovies[0]} </li>
    <li> {props.name[props.index].favoriteMovies[1]} </li>
    <li>  {props.name[props.index].favoriteMovies[2]} </li>
     </ol>
     
    
    </div>
  </div>

        )
      





}