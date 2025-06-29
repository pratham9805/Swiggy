import { useSelector } from "react-redux"



export default function Checkout()
{
    const item =useSelector(state=>state.slice1.items)
    // const count= useSelector(state=>state.slice1.count);
    // console.log(item);
    return(
       <div>
        <h1 className="text-5xl">Items Purchased</h1>

        {

            item.map(value=><div className="text-5xl" key={value.id} >
                
                <p>{value.name} </p></div>)
        }
       </div>
    )
}