export const navBarStyles = theme => {
    return({
        appBar: {
            backgroundColor: '#81B622',
            position: 'static'

        },
        toolBar:{
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 20,
            paddingLeft: 20 
        },
        title:{
            flexGrow: 1,
            fontFamily: 'Bubblegum Sans, cursive',   //Font Bubblegum
            fontWeight: 400
        },
        titleLink:{
            textDecoration: 'none',
            color: '#31352E'
        },
        buttons:{
            color: '#31352E',
            fontSize: '1rem',
            fontWeight: 400,
            fontFamily: 'Bubblegum Sans, cursive',
            '&:hover':{
                color: '#ffffff',
                backgroundColor: 'transparent'
            },
            textDecoration: 'none',
            padding: '0.5rem',
            textTransform: 'uppercase'
        },
        list:{
            listStyle: 'none',
            display: 'flex'
        }
    })
}