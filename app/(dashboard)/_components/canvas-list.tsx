"use client"

import EmptyBoard from "./empty-board";
import EmptyFavourites from "./empty-favourites";
import EmptySearch from "./empty-search";


interface CanvasListProps { 
    orgId:string;
    query:{ search?: string; favourites?: string };
}

export const CanvasList = ({orgId,query}:CanvasListProps)=>{

    const data=[]
    if(!data?.length && query.search) { 
        return(
            <EmptySearch/>
        )
    }

    if(!data?.length && query.favourites) {
        return(
            <EmptyFavourites/>
        )
    }

    if(!data?.length) {
        return(
           <EmptyBoard/>
        )
    }
    return( 
        <div>
            {JSON.stringify(query)}
        </div>
    )
}