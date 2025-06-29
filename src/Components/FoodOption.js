 import Foodcard from "./Foodcard"
 import { imageGridCards } from "../utils/Fooddata"
 export default function FoodOption()
{
    return(
        <div className="w-[80%] container mx-auto flex flex-wrap m-top">
            {
                imageGridCards.map((fooddata)=><Foodcard key={fooddata.id} fooddata={fooddata}></Foodcard>)
            }
            
        </div>
    )
}