import Dinecard from "./Dinecard.js"
import {DineoutRestaurant} from "../utils/Dinedata.js"
export default function DineOption()
{

    return(
        <div className="w-[80%] mx-auto mt-20">

            <p className="text-2xl font-bold">Discover best restaurants on Dineout </p>

            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 mb-20">
                {
                    DineoutRestaurant.map((restdata)=><Dinecard key={restdata?.info?.id} restdata={restdata}></Dinecard>)
                }
            </div>
        </div>
        )
    
}