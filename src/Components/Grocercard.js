

export default function Grocercard({Grocerdata})
{

    
    return(
        <div className="flex-none ">
        <a href={Grocerdata?.action?.link}>
        
   <img className="h-50 w-40 object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+Grocerdata?.imageId}></img>
       
       </a>
       <h2 className=" font-bold text-center">{Grocerdata?.action?.text}</h2>
        </div>
    )
}