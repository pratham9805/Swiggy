import Restheader from "./Restheader";
import { Outlet } from "react-router";

export default function Secondaryhome(){

    return(
       <>
            <Restheader></Restheader>
            <Outlet></Outlet>
       </>
    )
}