export const cartGridStyles = theme => {
    return({
        generalContainer:{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        container:{
            display: 'flex',
            justifyContent: 'center'
        },
        headerTable:{
            backgroundColor: '#e6e6e6'
        },
        tableContainer:{
            width: '80%',
            marginTop: '5%'
        },
        imgProducto:{
            maxWidth: '8rem'
        },
        delete:{
            '&:hover':{
                color: '#ff0000'
            }
        },
        buttonDelete: {
            marginTop: '10px',
            border: 'solid 1px #5c4000',
            fontFamily: 'Bubblegum Sans, cursive',
            color: '#31352E',
            '&hover':{
                color: '#ffffff',
                backgroundColor: '#81B622',
            }
        },
        messageOrder: {
            marginTop: '15px',
            textAlign: 'center'
        }
    })
}