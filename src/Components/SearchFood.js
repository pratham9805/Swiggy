import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setrestdata } from "../Stored/restmenuslice";
import { addItems, IncrementItems, DecrementItems } from "../Stored/Cartslicer";

export default function SearchFood() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const restdata = useSelector((state) => state.menuslice.restdata);
  const cartItems = useSelector((state) => state.slice1.items);
  const [food, setfood] = useState("");

  useEffect(() => {
    async function fetchdata() {
      const proxyserver = "https://cors-anywhere.herokuapp.com/";
      const swiggy = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
      const response = await fetch(proxyserver + swiggy);
      const data = await response.json();

      const tempdata = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterdata = tempdata.filter((file) => "title" in file?.card?.card);
      dispatch(setrestdata(filterdata));
    }
    fetchdata();
  }, [dispatch, id]);

  // ✅ Extract dishes from sections & categories
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

  // ✅ Remove duplicate dishes
  const uniqueDishes = allDishes.filter(
    (dish, index, self) =>
      index ===
      self.findIndex((d) => d?.card?.info?.id === dish?.card?.info?.id)
  );

  // ✅ Filter dishes by search input
  const filteredDishes = uniqueDishes.filter((dish) =>
    dish?.card?.info?.name?.toLowerCase().includes(food.toLowerCase())
  );

  return (
    <div className="w-[80%] mt-20 mx-auto">
      <input
        className="w-full pl-10 py-4 text-2xl rounded-2xl border bg-gray-200"
        onChange={(e) => setfood(e.target.value)}
        placeholder="Search Dishes Here"
        value={food}
      />

      <div className="mt-10">
        {filteredDishes.length === 0 ? (
          <p className="text-center text-xl">No Dishes Found</p>
        ) : (
          filteredDishes.map((dish) => {
            const info = dish?.card?.info;
            const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/${info?.imageId}`;
            const element = cartItems.find((item) => item.id === info?.id);
            const count = element ? element.quantity : 0;

            return (
              <div key={info?.id} className="flex justify-between w-full mb-6 pb-2 border-b-2">
                <div className="w-[70%]">
                  <p className="text-2xl text-gray-700 font-semibold mb-1">{info?.name}</p>
                  <p className="text-xl font-semibold">
                    ₹{(info?.price || info?.defaultPrice) / 100}
                  </p>
                  <p className="text-gray-500">{info?.description}</p>
                </div>

                <div className="w-[20%] relative h-42">
                  <img
                    className="w-60 h-36 object-cover rounded-3xl"
                    src={imageUrl}
                    alt={info?.name}
                  />
                  {count === 0 ? (
                    <button
                      onClick={() => dispatch(addItems(info))}
                      className="text-green-600 text-xl absolute bottom-0 rounded-xl shadow-md border-white left-20 border px-4 py-2 bg-white"
                    >
                      ADD
                    </button>
                  ) : (
                    <div className="flex gap-2 absolute bottom-0 left-16 rounded-2xl text-xl text-green-600 px-6 py-2 shadow-md border border-white bg-white">
                      <button onClick={() => dispatch(DecrementItems(info))}>-</button>
                      <span>{count}</span>
                      <button onClick={() => dispatch(IncrementItems(info))}>+</button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
