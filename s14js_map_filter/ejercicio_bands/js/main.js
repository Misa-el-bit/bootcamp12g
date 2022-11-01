//un array que almacene el nombre de las bandas sin repetirse
//agrupar las canciones de cada banda 
//saber cual es la cancion con mas likes (nombre de la cancion y banda)
//saber cual es la cancion con mas reproducciones (nombre de la cancion y banda)
let songsData = [
    {
        name: "Kashmir",
        band: "Led Zeppelin",
        releaseYear: "1980",
        statistics: {
          likes: 20000,
          reproductions: 8000,
        }
    },
    {
        name: "Smells Like Teen Spirit",
        band: "Nirvana",
        releaseYear: "1989",
        statistics: {
          likes: 25000,
          reproductions: 100000,
        }
    },
    {
        name: "So What",
        band: "Metallica",
        releaseYear: "1990",
        statistics: {
          likes: 12000,
          reproductions: 95000,
        }
    },
    {
        name: "Nothing Else Matters",
        band: "Metallica",
        releaseYear: "1992",
        statistics: {
          likes: 128000,
          reproductions: 915000,
        }
    },
    {
        name: "Daze",
        band: "Poets of the Fall",
        releaseYear: "2014",
        statistics: {
          likes: 3548413,
          reproductions: 87095138,
        }
    },
    {
        name: "The Sweet Scape",
        band: "Poets of the fall",
        releaseYear: "2018",
        statistics: {
          likes: 26268856,
          reproductions: 2424568,
        }
    },
    {
      name: "Paint It Black",
      band: "Rolling Stones",
      releaseYear: "1966",
      statistics: {
        likes: 96378956,
        reproductions: 8628568,
      }
  }

]
//un array que almacene el nombre de las bandas sin repetirse
const bandsNames = (arrayAIterar) =>{
  let bandList = [] // se crea un array vacio que almacenara los nombres de las bandas 
  arrayAIterar.forEach( (item) =>{ //el item representa cada uno de los objetos en el array
    console.log(item.band)
    let bandName = item.band.toLowerCase()
    !bandList.includes(bandName) && bandList.push(bandName)  //se usa el metodo includes para saber si un elemento se encuentra en un array especifico  
  })
  return bandList
}
console.log(bandsNames(songsData))
/*
const bandsNames = (arrayAIterar) =>{
  let bandNamesArray = []
  arrayAIterar.forEach(item => {
    let bandName = item.band.toLowerCase()
    if( !bandNamesArray.includes( bandName ) ){
      bandNamesArray.push( bandName )
    }
  });
  return bandNamesArray
}

console.log(bandsNames(songsData))
*/
//agrupar las canciones de cada banda 
const grupSongs = arrayAIterar =>{
  let songsList = bandsNames(arrayAIterar)
  let songsGrup = {}
  songsList.forEach(band=>{
    console.log(band)
    songsGrup[band.replaceAll(" ", "_")] = [] //se utiliza replace para quitar los espacios vacios del string y reemplazarlos con un guion bajo
  })
  arrayAIterar.forEach( song => { //manera rustica de hacerlo
    switch( song.band.toLowerCase()){
      case "metallica":
        songsGrup.metallica.push(song)
        break
      case "led zeppelin":
        songsGrup.led_zeppelin.push(song)
        break
      case "poets of the fall":
        songsGrup.poets_of_the_fall.push(song)
        break
      case "nirvana":
        songsGrup.nirvana.push(song)
        break  
      case "rolling stones":
        songsGrup.rolling_stones.push(song)
        break 
      default:
        console.log("no hay registro de la cancion")
    }
  })
  console.log(songsGrup)
}
grupSongs(songsData)

/*
[
  "La cancion {cancion} es de {banda}"
]
*/

const createLabelsArray = arrayAIterar =>{
  let labelsArray = []
  arrayAIterar.forEach( song =>{
    let {name, band} = song
    let label = `La canción ${name} es de ${band}`
    labelsArray.push(label)
    console.log(label)
  })
  return labelsArray
}
let result = createLabelsArray(songsData)

console.log(result)
//usando map version larga
/*
let songsLabels = songsData.map(song =>{
  let {name, band} = song
  let label = `La canción ${name} es de ${band}`
  return label
})
console.log(songsLabels)
*/
//usando map version sinplificada
let songsLabels = songsData.map( song => `La canción ${song.name} es de ${song.band}` )
console.log(songsLabels)

/*
obtener en un array todas las canciones de una banda en especifico
*/
//usando forEach
const getSongByBand = songsData =>{
  let result = []
  songsData.forEach( song => {
    let {band} = song 
    band === "Metallica" && result.push(song)
  })
  //console.log(result)
  return result
}
getSongByBand(songsData)
/*
//usando filter
let songsByBand = songsData.filter( song =>{
  return song.band === "Metallica"
})
console.log(songsByBand)

getSongByBand(songsData)
*/
//version mas simplificada
let songsByBand = songsData.filter(({band}) => band === "Nirvana")
console.log(songsByBand)
