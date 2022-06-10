export async function traerCanciones(){

const URI='https://api.spotify.com/v1/artists/7vhhNVggKs1kVHilwSqT4j/top-tracks?market=US'
const TOKEN='Bearer BQB380s5J-IIIAzVgwv3_vBt8zr90vXCu8fVHfVjT6ED9ikKxZ2traSz1CG1XaMlFLLdaDARJ4zgMShM4Ngqbk_UrsqDxi_22eRTaN87v-00OzqkKXYbOqBd5aCjWj2Ui4kQJM2SvA7wFPDky664dyx3uYF1-JJs5r2vblCtO4oFzTgr6VXStSH_a4HDvtNJ'
const FETCH={
    method:"GET",
    headers:{Authorization:TOKEN}
}
let respuesta= await fetch(URI,FETCH)
let datosFetched = await respuesta.json()

  return (datosFetched)
}
