// import { useSelector } from "react-redux"



// export default function Checkout()
// {
//     const item =useSelector(state=>state.slice1.items)
//     // const count= useSelector(state=>state.slice1.count);
//     // console.log(item);
//     return(
//        <div>
//         <h1 className="text-5xl">Items Purchased</h1>

//         {

//             item.map(value=><div className="text-5xl" key={value.id} >
                
//                 <p>{value.name} </p></div>)
//         }
//        </div>
//     )
// }

import { useSelector } from "react-redux";

export default function Checkout() {
  const items = useSelector((state) => state.slice1.items);

  // ✅ Calculate total price
  const totalPrice = items.reduce(
    (total, item) =>
      total + (item.price || item.defaultPrice) * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
        🛒 Items in Your Cart
      </h1>

      {items.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <h2 className="text-lg font-medium text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
              <p className="text-lg font-semibold text-gray-700">
                ₹{((item.price || item.defaultPrice) * item.quantity) / 100}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Total Price */}
      <div className="mt-8 border-t pt-4 flex items-center justify-between">
        <span className="text-xl font-semibold text-gray-800">Total to Pay:</span>
        <span className="text-xl font-bold text-green-600">
          ₹{totalPrice / 100}
        </span>
      </div>
    </div>
  );
}
