import axios from "axios";
import { useState } from "react";

function useFlipCard(flip = true){
    const [isFlipped, setIsFlipped] = useState(flip);

    const flipCard = () =>{
        setIsFlipped(!isFlipped);
    }

    return [isFlipped, flipCard];
}

function useAxios(baseURL){

    const [data, setData] = useState({});
    const getData = async (path='')=>{
        const result = await axios.get(`${baseURL}${path!==''?path:""}`);
        setData(result.data);
    }

    return [data, getData]
}
export {
     useFlipCard, 
    useAxios}
     ;