export const finishPurchaseButtonStyles = theme => {
    return({
        generalContainer:{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px'
        },
        container:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        buttons:{
            textDecoration: 'none',
            borderRadius: '4px',
            border: 'solid 1px #5c4000',
            fontFamily: 'Bubblegum Sans, cursive',
            width: '10em',
            color: '#31352E',
            padding: '6px 8px',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin:'2.5px 0',
            fontSize: '0.875rem',
            '&:hover':{
                color: '#31352E',
                backgroundColor: '#5c4000',
            }

        }
    })
}