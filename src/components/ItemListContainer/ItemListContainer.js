import React, { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom';
import { dataBase } from '../../Firebase/firebase.js';

export const ItemListContainer = props => {

    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        const itemCollection = dataBase.collection("items");

        if(categoryId === undefined){
            itemCollection.get().then((querySnapshot) => {
                if(querySnapshot.size === 0){
                    console.log('Sin resultados')
                }
                setProductos(querySnapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )));
            }).catch((error) => {
                console.log('Error:', error)
            })
        }else {
            itemCollection.where("category", "==", categoryId).get().then((querySnapshot) => {
                if(querySnapshot.size === 0){
                    console.log('Sin resultados')
                }
                setProductos(querySnapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )));
            }).catch((error) => {
                console.log('Error:', error)
            })
        }
    }, [categoryId])

    

    return<>
        <ItemList productos={productos}/>
    </>
}