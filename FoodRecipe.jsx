import React from  "react"


const FoodRecipe=(props)=>{
     const {img,title,ingredientLines}=props;

     
    return(

        <>
        
          
         
        
        <div className="col-md-3">
                
            <div className="card my-3 mx-5  py-2">
        <img src={img} className="card-img-top w-50 mx-auto rounded-circle" alt="alt."/>
        <div className="card-body my-2 mx-auto">
        <h5 className="card-title">{title}</h5>
        <ol className="my-2">
        {
            ingredientLines.map((value,ind)=>{

                return(
                    <>
                   <li key={ind}>{value}</li>
                    </>
                )
            })
        }
    </ol>
  </div>
</div>
</div>

 
        </>
    )


}
export default FoodRecipe;