import { useEffect, useState } from "react";
import Restcard from "./Restcard";
import Shimmerefect from "./Shimmerefect";
export default function Restaurant()
{
    const [restdata,setrestdata]=useState([])

    useEffect(()=>{
        async function fetchdata() {
            const proxyserver ="https://cors-anywhere.herokuapp.com/";
            const swiggyapi = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"
          const response=await  fetch(proxyserver+swiggyapi)
            const data = await response.json();

            setrestdata(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
        }
        fetchdata();
    },[])
    if(restdata.length==0)
        return <Shimmerefect/>
    
    return(
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">

{
    restdata.map((restinfo)=><Restcard key={restinfo?.info?.id} restinfo={restinfo}></Restcard>)
}
        </div>
    )
}