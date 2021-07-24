export const formularioStyles = theme => {
    return({
        cardContainer: {
            marginTop: '15px'
        },
        cardContent: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        },
        buttonOk: {
            marginTop: '10px',
            border: 'solid 1px #31352E',
            fontFamily: 'Bubblegum Sans, cursive',
            color: '#31352E',
            '&:hover':{
                color: '#ffffff',
                backgroundColor: '#31352E',
            }
        }
    })
}