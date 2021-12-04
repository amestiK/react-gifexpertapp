import { useEffect } from "react";
import { useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    // Se crea un state para almacenar la respuesta del fetch y sus valores
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Utilizamos useEffect para prevenir que nuestra api se ejectue en un loop infinito
    useEffect(() => {
        //Si la respuesta es true, trabajamos con las variables obtenidas y las asignamos al state
        getGifs( category ).then(imgs => {

            setState({
                data: imgs,
                loading: false
            }) 

        })

    }, [category])

    //Retornamos el state con los valores cargados al componente GifGrid
    return state; // {data: [], loading: true}
}