import { traerCanciones } from "../services/spotify"
import { useState, useEffect } from "react"

import './consumo.css'

export function Consumo(){

    const [canciones, setCanciones]=useState(null)
    const [isLoading, setisLoading]=useState(true)

    useEffect(function(){
        traerCanciones()
        .then(function(res){
            setCanciones(res)
            setisLoading(false)
        })
    },[])

    if (isLoading){
        return(<h1>Cargando...</h1>)
    }
    else{
        return (

            <>
        
                {
                    canciones.tracks.map(function(cancion,i){
                        return (
                          // <div key={i}>

                          //     <h1 >{cancion.name}</h1>
                          //     <audio src={cancion.preview_url} controls></audio>

                          // </div>
                          <>
                            <div classNameName="card"   key={i} >
                              <img src={cancion.album.images[0].url} className="card-img-top" alt="..." />
                              <div className="card-body">
                                <p className="card-text">
                                    {cancion.name}
                                </p>
                                <audio src={cancion.preview_url} controls></audio>
                              </div>
                            </div>
                          </>
                        );
                    })
                }
        
                <h1>Trabajando Cosumo</h1>
        
        
        
        
            </>
        
          )
    }

  
}
