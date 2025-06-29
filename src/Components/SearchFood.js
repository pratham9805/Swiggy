import { useState } from "react";
import { useParams } from "react-router"


import { useEffect,useState } from "react";
export default function SearchFood()
{
    const {id}= useParams();
    const [food,setfood]=useState("");
      const [restdata,setrestdata]=useState([]);
      useEffect(()=>{
            async function  fetchdata() {
    
                const proxyserver="https://cors-anywhere.herokuapp.com/";
                const swiggy=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
                const response = await fetch(proxyserver+swiggy);
                const data = await response.json();
                
                const tempdata=data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
               const filterdata= tempdata.filter((file)=>"title" in file?.card?.card);
                console.log(filterdata);
                setrestdata(filterdata);
                
        }
        fetchdata();
        },[]);
        
    return(
      <div className="w-[80%] mt-20 mx-auto ">
        <input className="w-full pl-10 py-4 text-2xl rounded-2xl border bg-gray-200"  onChange={(e)=>setfood(e.target.value)} placeholder="Search Here"></input>
      </div>
    )
}