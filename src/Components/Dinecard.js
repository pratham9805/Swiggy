

export default function Dinecard({restdata})
{


    return(
        <div className="max-w-sm flex-none"> 
    <a target="_blank" href={restdata?.cta?.link}>
            <div className="relative">
                <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restdata?.info?.mediaFiles[0]?.url}></img>
                <p className="absolute z-10  bottom-4 left-4 text-xl text-white">{restdata?.info?.name}</p>
                <p className="absolute z-10 bottom-4 right-4 text-xl text-white">{restdata?.info.rating.value}</p>
                <div className="absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0"></div>
            </div>
            </a>
        </div>
    )
}