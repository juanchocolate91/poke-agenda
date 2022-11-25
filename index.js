
//Reto: Hacer un html con un input y una lista(darle estilo)
//hacer que al pulsar una tecla en el input,se vea en el console.log su valor
//ha cer unn array con la informacion de los  primeros pokemons
// mostrar en la lista el nombre y la imagen de los pokemons



//Opcion A - hacemos una peticion despues que termine la anterior
const getData = async() => {
        const arr = [];
        for (let index = 1; index <= 151; index++) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + index);
const data =await response.json();
arr.push(data)
        }
        console.log(arr);
}
// petición a la pokeapi
const pokeApi = (id) => {
        return fetch('https://pokeapi.co/api/v2/pokemon/' + id)
}


//pedimos la informacion de quantity pokemons
//Opcion B - Hacemos todas las peticiones a la vez
const getAllPokemons = async (quantity) => {
        const promises = [];

        //guardamos en un array la promesa del fetch
        for(let index = 1; index <= quantity; index ++) {
                promises.push(pokeApi(index))
        }
        /* console.log(promises); */
        //Esperamos a que todas las promesas de fetch terminen
        const data = await Promise.all(promises);
        /* console.log(data); */
        //Creamos una nueva array con la promesa del .json()
const responses = data.map((response)=> {
        return response.json()
})
/* console.log(responses); */
//Esperamos a que se resuelva la promesa del json
const pokemons = await Promise.all(responses)
console.log(pokemons)
return pokemons
}

const search = document.querySelector('#search');
search.addEventListener('keyup', ()=>{
    console.log(search.value)
})
//Esta evento se ejecutará cuando inicie la pagina
window.addEventListener('load' , async () => {
      const pokemons = await getAllPokemons(151)
})

getData()