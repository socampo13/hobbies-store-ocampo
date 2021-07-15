export const cartMessageStyles = theme => {
    return({
        container:{
            marginTop: '20px'
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
                color: '#ffffff',
                backgroundColor: 'transparent',
            }

        },
        text:{
            textAlign: 'center'
        },
        buttonContainer:{
            display: 'flex',
            justifyContent: 'center'
        }
    })
}