import React {useState} from "react";
import axios from "axios";
import axios from "./API";
import { useState } from "react";

const Content = () => {}

const[searchTerm,setSearchTerm]=useState("");
const[data,setData]=useState({});
const onSearchHandler =() => {
    if (!searchTerm) {
        return;
    }
}

    axios({
    method:"GET",
    url:'http://www.omdbapi.com/?t=${searchTerm}&apikey=eead09f1',
    
  }) . then (response) => {
    setData(response.data);
    console.log(response.data);
  
setSearchTerm("")
}

return (
    <div className="h-screen bg-slate-800 w-full pt-7">

    <div className="w-full flex items-center justify-center">
        <input type="text" placeholder="Type movie...." className="text-[19px] mr-4 outline-none rounded-md p-2 w-[40%]" value={searchTerm} onCharge={e => setSearchTerm e . target.value }
)



