import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import Formulario from './Formulario';
import { dataBase } from '../../../../Firebase/firebase';
import { Popover } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));


const Information = () => {
    const [forms, setForms] = useState([]);
    const [currentId, setCurrentId] = useState("");
    const classes = useStyles();


    const getName = async () => {
        dataBase.collection("forms").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setForms(docs);
        });
    };

    const onDeleteForm = async (id) => {
        if(window.confirm("¿Desea borrar sus datos?")){
            await dataBase.collection("forms").doc(id).delete();
            Popover("Eliminado!",{
                type: "error",
                autoClose: 2000
            });
        }
    };

    useEffect(() => {
        getName();
    }, []);

    const addOrEditName = async (linkObject) => {
        try {
            if(currentId === ""){
                await dataBase.collection("forms").doc().set(linkObject);
                Popover("Agregado!", {
                    type: "success",
                });
            } else {
                await dataBase.collection("forms").doc(currentId).update(linkObject);
                Popover("Actualizado con exito", {
                    type: "info",
                });
                setCurrentId("")
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
        <div>
            <Formulario {...{ addOrEditName, currentId, forms }} />
        </div>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <div>
                        {forms.map((forms) => (
                            <div key={forms.id}>
                                <h3>{forms.name}</h3>
                                <div>
                                    <i onClick={() => onDeleteForm(forms.id)}>
                                        Borrar
                                    </i>
                                    <i onClick={() => setCurrentId(forms.id)}>
                                        Crear
                                    </i>
                                    <p>{forms.description}</p>
                                    <a href={forms.name}>Bienvenid@</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </Paper>
            </Grid>
        </Grid>
        
        </>
    );
};

export default Information;