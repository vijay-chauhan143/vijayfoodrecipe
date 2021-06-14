import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import FastfoodIcon from '@material-ui/icons/Fastfood';



const Header=(props)=>{

     const{food,onInputChange,onItemChang}=props

   

    
    return(
        <>
         <div className="main-div">
         <div className="header-div ">
         
         <h1> <span className="w-50"><FastfoodIcon /></span>Food Recipes</h1>
         <div className="input-group w-50 mx-auto">
          <input
           type="text" 
          className="form-control"
           placeholder="Search your Recipes..." 
               onChange={onInputChange}
               value={food}

           />
         <span onClick={onItemChang} className="input-group-text btn btn-dark" >Search Recipes</span>
        </div>
         </div>
         </div>
        <div>
            
        </div>
        </>
    )

}
export default Header;