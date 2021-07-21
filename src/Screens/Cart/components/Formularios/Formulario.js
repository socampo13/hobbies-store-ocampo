import React, { useState, useEffect} from 'react';
import { dataBase } from '../../../../Firebase/firebase';
import { Popover } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';
import { Button } from '@material-ui/core';



const Formulario = (props) => {
    const initialStateValues = {
        nombre: "",
        telefono: "",
        correo: "",
    }

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = (e) =>{
        const { name, value } = e.target;
        setValues({ ...values, [name]: value});
    };

    const validEmail = (str) => {
        var pattern = new RegExp(
            "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
        return !!pattern.test(str);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validEmail(values.correo)){
            return Popover("email incompleto", { type: "warning", autoClose: 1000});
        }

        props.addOrEditEmail(values);
        setValues({...initialStateValues});
    }

    const getMailById = async (id) => {
        const doc = await dataBase.collection("forms").doc(id).get();
        setValues({...doc.data() });
    };

    useEffect(() => {
        if(props.currentId === ""){
            setValues({...initialStateValues});
        }else{
            getMailById(props.currentId)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.currentId]);

    return (
        <form>
        <Card className={classes.root}>
            <div>
               <input type="text" className="form-control" placeholder="Nombre" value={values.nombre} name="nombre" onChange={handleInputChange} />
            </div>
            <div>
               <input type="text" className="form-control" placeholder="Telefono" value={values.telefono} name="telefono" onChange={handleInputChange} />
            </div>
            <div>
               <input type="text" className="form-control" placeholder="correo@correo.com" value={values.correo} name="correo" onChange={handleInputChange} />
            </div>

        <Button>
            {props.currentId === "" ? "Finalizar compra" : "Actualizar"}
        </Button>

        </Card>
        </form>
    );
};

export default Formulario;