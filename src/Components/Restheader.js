import { useSelector } from "react-redux"
import { Link } from "react-router";



export default function Restheader()
{
    const counter =useSelector(state=>state.slice1.count);

    return(
        <div className="container w-[80%] mx-auto py-4 px-8 bg-gray-200 text-5xl flex justify-between items-center">
            <div >
                <p  className="text-orange-600 font-bold">Swiggy</p>
            </div>
            <div>
                <Link to={"/checkout"}>
                <p>Cart {`${counter}`}</p>
                </Link>
                </div>
        </div>
    )
}