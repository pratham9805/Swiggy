
import { useState } from "react"
import RestInfo from "./RestInfo"

export default function Menucard({menuItems,selected})
{
    const [isOpen,setisOpen]=useState(true);
   
    if("categories" in menuItems)
    {
        return(
            <div className="w-full">
                 <p className="text-2xl font-bold">{menuItems?.title}</p>
                 <div>
                    {
                        menuItems?.categories?.map((items)=><Menucard key={items?.title} menuItems={items} selected={selected}></Menucard>)
                    }
                 </div>
            </div>
        )
    }

    if(selected==='veg')
    {
        return(
             <div className="w-full">
            <div className="flex justify-between w-full">
                        <p className="text-3xl font-bold mb-3 mt-4">{menuItems?.title}</p>
                        <button className="text-5xl font-bold mr-20" onClick={()=>setisOpen(!isOpen)}>{"⌃"}</button>
                 </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restdata={items?.card?.info}></RestInfo>)
                }
            </div>
             <div className="h-6 bg-gray-200 mb-2 mt-2"></div>
        
        </div>
        )
    }

    if(selected==='nonveg')
    {
        return(
              <div className="w-full">
            <div className="flex justify-between w-full">
                        <p className="text-3xl font-bold mb-3 mt-4">{menuItems?.title}</p>
                        <button className="text-5xl font-bold mr-20" onClick={()=>setisOpen(!isOpen)}>{"⌃"}</button>
                 </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restdata={items?.card?.info}></RestInfo>)
                }
            </div>
             <div className="h-6 bg-gray-200 mb-2 mt-2"></div>
        
        </div>
        )
    }
    if(!isOpen)
    {
        return(
            <div className="w-full">
                 <div className="flex justify-between w-full">
                        <p className="text-3xl font-bold mb-3 mt-4">{menuItems?.title}</p>
                        <button className="text-5xl font-bold mr-20" onClick={()=>setisOpen(!isOpen)}>{"⌵"}</button>
                 </div>
                 <div className="h-6 bg-gray-200 mb-2 mt-2"></div>
            </div>
        )
    }

    return(

        
           
        <div className="w-full">
            <div className="flex justify-between w-full">
                        <p className="text-3xl font-bold mb-3 mt-4">{menuItems?.title}</p>
                        <button className="text-5xl font-bold mr-20" onClick={()=>setisOpen(!isOpen)}>{"⌃"}</button>
                 </div>
            <div>
                {
                    menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restdata={items?.card?.info}></RestInfo>)
                }
            </div>
             <div className="h-6 bg-gray-200 mb-2 mt-2"></div>
        
        </div>
    )
}