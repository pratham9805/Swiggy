
import { Grocerdata } from "../utils/Grocerdata"
import Grocercard from "./Grocercard";
export default function GrocerOption()
{

    return(
        <div className="mt-20 w-[80%] container mx-auto   ">
       <h2 className="text-black font-bold text-2xl"> Shop Groceries on instamart</h2>
        <div className=" container mx-auto flex mt-10 flex-nowrap overflow-x-auto gap-5">
        {
            Grocerdata.map((fooddata)=><Grocercard key={fooddata.id} Grocerdata={fooddata}></Grocercard>)
        }

        </div>
        </div>
    )
}