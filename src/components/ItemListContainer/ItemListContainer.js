import React, { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList.js'
/* import { useParams } from 'react-router-dom';
import { myPromise } from '../../Services/Promise/Promise.js'; */
import { dataBase } from '../../Firebase/firebase.js';

export const ItemListContainer = props => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = dataBase();
        const productCollection = db.collection('items');
        productCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                return ( 
                    <h2>Lo sentimos, en este momento no podemos mostrar lo que buscas. Intena más tarde.</h2>
                )
            }
            setProductos(querySnapshot.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            })));
        }).catch((error) => {
            console.log('Error buscando', error);
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    const ordenes = dataBase.collection('ordenes');
    const newOrder = {
        buyer: userInfo,
        items: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: price()
    }
    ordenes.add(newOrder).then(({ id }) =>{
        setOrderId(id);
    }).catch(err => {
        setError(err);
    }).finally(() => {
        setLoading(false)
    });

    const batch = dataBase.batch();
    const newBuyer = dataBase.collection("buyer").doc();
    batch.set(newBuyer, {
        name: 'Simon',
        phone: '+573172983155',
        email: 'montioca16@gmail.com',
    });
    const updateBuyer = dataBase.collection("buyer").doc("AIzaSyDgDquWb87TgSq8iTSrZDOlf8WOR35BdK4");
    batch.update(updateBuyer, { "name": 'Simon' });

    batch.commit().then(dat => {
        console.log(dat, '¿Quien es el nuevo buyer?')
    });

    const buyerToUpdate = dataBase.collection("items")
    .where(firebase.firestore.FieldPath.documentId(), 'in', items.map(i => i.item.id));

    buyerToUpdate.get().then(querySnapshot => {
        const batch = dataBase.batch();
        const outOfStock = [];

        querySnapshot.docs.forEach((docSnapshot, idx) => {
            if(docSnapshot.data().stock >= items[idx].quantity){
                batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock + items[idx].quantity });
            }else {
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id});
            }
        })
        if(outOfStock.length === 0){
            batch.commit().then(() => {

            });
        }
    })


    return<>
        <ItemList productos={productos}/>
    </>
}