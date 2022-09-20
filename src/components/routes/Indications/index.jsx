import { useEffect } from "react";

import { getContext } from "../../../hooks/UserContext";
import { getRequisition } from "../../../utils/api";

export default function Indications(){
    const { contextData } = getContext();
    useEffect(()=>{
        getIndications();
    },[])
    async function getIndications(){
        const indications = await getRequisition("indication", contextData);
        console.log(indications);
    }
    return <h1>indicações no console</h1>
}