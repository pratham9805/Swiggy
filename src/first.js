import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./Components/Restaurant";
import {BrowserRouter,Routes,Route} from "react-router";
import Home from "./Components/Home";
import Restaurantmenu from "./Components/Restaurantmenu";
import SearchFood from "./Components/SearchFood";
import Secondaryhome from "./Components/Secondaryhome";
// import Checkout from "./Components/Checkout";
import Checkout from "./Components/Checkout";
import { store } from "./Stored/stores";
import {Provider} from "react-redux";

function App()
{
    return(
      <>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route element={<Secondaryhome></Secondaryhome>}>
        <Route path="/restaurant" element={<Restaurant/>}></Route>
        <Route path="/city/delhi/:id" element={<Restaurantmenu></Restaurantmenu>}></Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
       </Routes>
    
     
      </BrowserRouter>
      </Provider>
      </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)