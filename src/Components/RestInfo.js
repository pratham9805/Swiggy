import { useState } from "react"
import  {addItems,IncrementItems,DecrementItems} from "../Stored/Cartslicer"
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({restdata})
{
    // const [count,setcount]=useState(0);
    const dispatch =useDispatch();
   const items= useSelector(state=>state.slice1.items);

   const element = items.find(item=>item.id===restdata.id);
   const count = element?element.quantity:0;

    function Handleadditems()
    {
      
        dispatch(addItems(restdata));
    }
    

    function HandleIncrement()
    {
      
        dispatch(IncrementItems(restdata));
    }

    function HandleDecrement()
    {
      
        dispatch(DecrementItems(restdata));
    }
    return(
        <>
        <div className=" flex justify-between w-full mb-2 pb-2">
           
            <div className="w-[70%]">
                <p className="text-2xl text-gray-700 font-semibold mb-1">{restdata?.name}</p>
                <p className="text-xl">₹{"price" in restdata?(restdata.price)/100:(restdata.defaultPrice)/100}</p>

                <span className="text-green-700">{restdata?.ratings?.aggregatedRating?.rating}</span>
                <span>{"("+restdata?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                <p>{restdata?.description}</p>
                
            </div>


            <div className="w-[20%] relative h-42">
                <img className="w-60 h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restdata?.imageId}></img>
            {
                count===0?(<button onClick={()=>{Handleadditems()}} className="text-green-600 text-2xl absolute bottom-0 rounded-xl shadow-md  border-white left-20 border px-4 py-2 bg-white">ADD</button>
):(<div className="flex gap-2 absolute bottom-0 left-18 rounded-2xl text-2xl text-green-600 px-6 py-2  shadow-md border border-white bg-white ">
    <button onClick={()=>{HandleDecrement()}}>-</button>
    <span>{count}</span>
    <button  onClick={()=>{HandleIncrement()}}>+</button>
</div>)
            }
         
                        </div>
           
        </div>
        <hr className="mb-6 mt-2"></hr>
        </>
    )
}