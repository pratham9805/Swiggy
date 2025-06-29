
import { Link } from "react-router"
export default function Header()
{

    return(
            <header className="bg-[#FF5200] font-serif">
        
        <div className="flex justify-between container mx-auto py-8">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                <div className="text-white text-base font-bold  flex items-center gap-15">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with Us</a>
                    <a className="border border-white py-3 px-4 scroll-smooth"   href="#img">Get the App</a>
                    <a className="border border-black bg-black rounded-2xl py-3 px-4" target="_blank" href="https://www.swiggy.com/corporate/">Sign In</a>

                </div>
        </div>

        <div className="pt-16 pb-8 relative">
          <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
          <img  className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
            <div className="max-w-[60%] text-5xl text-white container mx-auto  ">
               Order Food and groceries. Discover best restaurants. Swiggy it!
            </div>

            <div className="max-w-[68%] container mx-auto flex gap-5 mt-10">
                <input className="bg-white w-[40%] rounded-2xl px-6 py-4 text-base " placeholder="Delhi, India"></input>
                <input className="bg-white w-[55%] rounded-2xl px-6 py-4 " placeholder="Search For Restaurant and items for more"></input>
            </div>
        </div>

         <div className="max-w-[80%] container flex mx-auto">
       <Link to="/restaurant">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
       </Link>

        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
        </a>

        <a href="https://www.swiggy.com/dineout">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
        </a>
        </div>

        
        </header> 
    )
}