import React from "react"
import './App.css';
import Header from "./Header"
//import Recipe from './Recipe';
import FoodRecipe from './FoodRecipe';
import { useState,useEffect } from "react";
import axios from "axios";


const FoodItem=()=>{

    const [food,setFood] = useState();
    var[Recipes,setRecipes]=useState([]);
    const API_ID="3d5f3301";
    const API_KEY="faddbe722b4f9eee4f581b5be8812c5f";
    //var [counter,setCounter] = useState(0);
    
 
      /*useEffect(()=>{
      if(counter === 0) 
        getRecipes();
        
       },[]);*/

       

       const getRecipes = async() => {
         
        const response = await fetch(
          `https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${API_KEY}`
        )

        const data = await response.json();
       
        
        setRecipes(data.hits);
          
        console.log(Recipes);
      }

      
      

    

   const onInputChange=(e)=>{
   
    setFood(e.target.value);
   };
   const onItemChang=()=>{

    getRecipes();
   };
   
  return (
    <>
  
    <Header food={food || ''} onInputChange={onInputChange} onItemChang={onItemChang}  />
    <div className="container-fluid">
    <div className="row">
          {
            Recipes.map((val,ind)=>{

              return(
                val != null ? 
                <FoodRecipe img={val.recipe.image}  title={val.recipe.label} key={ind} ingredientLines={val.recipe.ingredientLines}/>
                : ''
              )
            })
          }
          </div>
          </div>
          </>
        

    
  );
}





export default FoodItem;