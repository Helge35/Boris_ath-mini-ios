import React from 'react';
import { useParams } from 'react-router';


export const FfcPage = ()=>{
    const { id } = useParams();
    return(
        <div>Choco : {id}</div>
    )
} 