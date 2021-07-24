import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom';
import { dataBase } from '../../Firebase/firebase.js';
export const ItemDetailContainer = props => {

    const [detalleProducto, setDetalleProducto] = useState([])
    const {productId} = useParams();
    

    useEffect(() => {
        const itemCollection = dataBase.collection("items");
        const item = itemCollection.doc(productId)

        item.get().then((doc) => {
            if(!doc.exists){
                console.log('Sin existencia')
                return;
            }
            setDetalleProducto([{id: doc.id, ...doc.data()}])
            debugger;
        }).catch((error) => {
            console.log('Error', error)
        })
    }, [productId])

    return<>
       {
           detalleProducto.map((detalle) => <ItemDetail detalleProducto={detalle}/>)
       }
    </>
}
