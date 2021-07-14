import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { navBarStyles } from './NavBarStyles'
import { CartWidget } from './components/CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'

const useStyle = makeStyles((theme) => navBarStyles(theme));

export const NavBar = props => {
    const {itemsCart} = useContext(CartContext)
    const figuras = "figura"
    const tradingCardGames = "juego de mesa"
    const decoracion = "decoracion"

    const classes = useStyle()
    return <>
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Typography variant='h3' className={classes.title}>
                    <Link className={classes.titleLink} to={'/'}>Hobbies Store</Link>
                </Typography>
                <ul className={classes.list}>
                    <li>
                        <Link className={classes.buttons} to={`/category/${figuras}`}>Figuras de Colección</Link>
                    </li>
                    <li>
                        <Link className={classes.buttons} to={`/category/${tradingCardGames}`}>Trading Card Games</Link>
                    </li>
                    <li>
                        <Link className={classes.buttons} to={`/category/${decoracion}`}>Decoración</Link>
                    </li>
                </ul>
                {itemsCart.length > 0 ? <CartWidget/> : ''}
            </Toolbar>
        </AppBar>
    </>
}