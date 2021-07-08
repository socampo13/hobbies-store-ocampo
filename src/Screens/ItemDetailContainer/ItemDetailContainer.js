import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom';
import { dataBase } from '../../Firebase/firebase.js';
export const ItemDetailContainer = props => {

    const [detalleProducto, setDetalleProducto] = useState([])
    const {productId} = useParams();
    const [Loading, setLoading] = useState(false);
    const [itemSelected, setItemSelected] = useState();
    console.log(itemSelected);

    useEffect( () => {
       setLoading(true);
       const db = dataBase();
       const productsCollection = db.collection('products');
       const objeto = productsCollection.doc(productId);

       objeto.get().then((doc) => {
           if(!doc.exists) {
               console.log('Producto no existente');
               return;
           }
           console.log('Producto encontrado');
           setItemSelected({
               id: doc.id,
               data: doc.data(),
           });
       }).catch((error) => {
           console.log('Error buscando producto', error);
       }).finally(() => {
           setLoading(false);
       })
    }, []);

    return<>
        {
            Loading && <h4>Cargando...</h4>
            
        }
            <ItemDetail item={itemSelected}/>
    </>
}
