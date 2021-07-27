import React from 'react';
import { IconButton, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { counterStyles } from './CounterStyles'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyle = makeStyles((theme) => counterStyles(theme));

export const Counter = props => {
    const {stock, cantidadProducto, onAddToCart, onDiscount, onAdd} = props;

    const classes = useStyle()

    /* const handleChangeCount = () => {
        setCount(count + 1);
    }
    const handleChangeDiscount = () => {
        setCount(count - 1);
    }
     */
    return<div className={classes.generalContainer}> 
        <div className={classes.container}>
            <Typography variant="h4" className={classes.counter}>{cantidadProducto}</Typography>
            <div className={classes.buttonsContainer}>
                <IconButton className={classes.counterButtons} onClick={() => onAdd()} disabled={cantidadProducto >= stock }>
                    <AddCircleOutlineIcon/>
                </IconButton>
                <IconButton className={classes.counterButtons} onClick={() => onDiscount()} disabled={cantidadProducto === 1 }>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
            </div>
        </div>
        <div>
            <div className={classes.container}>
                <Button 
                    className={classes.buttonCart}
                    startIcon={<AddShoppingCartIcon/>}
                    onClick={() => onAddToCart(cantidadProducto)}
                    disabled={stock === 0 ? true : false}
                >
                    Agregar al carrito
                </Button>
            </div>
        </div>
    </div>
}