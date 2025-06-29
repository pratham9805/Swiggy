
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import Menucard from "./Menucard";
export default function Restaurantmenu()
{
    let {id}=useParams();
    const [restdata,setrestdata]=useState([]);
     const [selected,setselected]=useState(null);

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
        <div>
            <div  className="w-[80%] mx-auto mt-20 mb-20">
                <Link to={`/city/delhi/${id}/search`}>
                <p className="text-2xl py-6 text-center w-full bg-gray-200 rounded-4xl">Search for Dishes</p>
                </Link>
            </div> 
             <div className="w-[80%] mx-auto mt-20 mb-20">
                <button className={`text-2xl border px-8 py-2 rounded-2xl mr-4 ${selected==='veg'?"bg-green-600":"bg-gray-300"}`} onClick={()=>setselected(selected==='veg'?null:'veg')}>Veg</button>
                <button className={`text-2xl border px-4 py-2 rounded-2xl ${selected==='nonveg'?"bg-red-600":"bg-gray-300"}`} onClick={()=>setselected(selected==='nonveg'?null:'nonveg')}>Non-Veg</button>
            </div>
        <div className="w-[80%] mx-auto mt-20">
            {
                restdata.map((items)=><Menucard key={items?.card?.card?.title}  menuItems={items?.card?.card} selected={selected}></Menucard>)
            }
        </div>
        </div>
    )
}