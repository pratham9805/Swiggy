import { useState } from "react";
import { useParams } from "react-router"
import {setrestdata} from "../Stored/restmenuslice";
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addItems } from "../Stored/Cartslicer";
export default function SearchFood()
{


    const {id}= useParams();
    const dispatch = useDispatch()
    const restdata = useSelector((state)=>state.menuslice.restdata);
    const [food,setfood]=useState("");
      // const [restdata,setrestdata]=useState([]);
      useEffect(()=>{
            async function  fetchdata() {
    
                const proxyserver="https://cors-anywhere.herokuapp.com/";
                const swiggy=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
                const response = await fetch(proxyserver+swiggy);
                const data = await response.json();
                
                const tempdata=data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
               const filterdata= tempdata.filter((file)=>"title" in file?.card?.card);
                console.log(filterdata);
               dispatch( setrestdata(filterdata));
                
        }
        fetchdata();
        },[dispatch,id]);


          // ✅ Extract all dishes from sections & categories
  let allDishes = [];
  restdata.forEach((section) => {
    const items = section?.card?.card?.itemCards;
    if (items) {
      items.forEach((dish) => {
        allDishes.push(dish);
      });
    }

    const categories = section?.card?.card?.categories;
    if (categories) {
      categories.forEach((category) => {
        const categoryItems = category?.itemCards;
        if (categoryItems) {
          categoryItems.forEach((dish) => {
            allDishes.push(dish);
          });
        }
      });
    }
  });

  // ✅ Remove duplicate dishes by dish ID
  const uniqueDishes = allDishes.filter(
    (dish, index, self) =>
      index ===
      self.findIndex((d) => d?.card?.info?.id === dish?.card?.info?.id)
  );

  // ✅ Filter dishes by search input
  const filteredDishes = uniqueDishes.filter((dish) =>
    dish?.card?.info?.name?.toLowerCase().includes(food.toLowerCase())
  );

      
        
    return(
      <div className="w-[80%] mt-20 mx-auto ">
        <input className="w-full pl-10 py-4 text-2xl rounded-2xl border bg-gray-200"  onChange={(e)=>setfood(e.target.value)} placeholder="Search Here"></input>
        <div className="mt-10">
        {filteredDishes.length === 0 ? (
          <p className="text-center text-xl">No Dishes Found</p>
        ) : (
          filteredDishes.map((dish) => {
            const info = dish?.card?.info;
            const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${info?.cloudinaryImageId}`;

            return (
              <div
                key={info?.id}
                className="p-4 my-4 border rounded-lg bg-white shadow-md flex items-center"
              >
                <img
                  src={imageUrl}
                  alt={info?.name}
                  className="w-28 h-28 rounded-lg object-cover mr-6"
                />
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold">{info?.name}</h2>
                  <p className="text-gray-600">
                    ₹{(info?.price || info?.defaultPrice) / 100}
                  </p>
                  <button
                    className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg"
                    onClick={() => dispatch(addItems(info))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    
      </div>
      

    )
}