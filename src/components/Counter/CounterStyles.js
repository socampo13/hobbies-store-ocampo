const commonJustify = {
    display: 'flex',
    justifyContent: 'center',
}

const commonDirection = {
    flexDirection: 'column',  
}

const commonAlign = {
    alignSelf: 'center'
}

const commonColor = {
    color: '#81B622'
}

export const counterStyles = theme => {
    return({
        generalContainer: {
            ...commonJustify,
            ...commonDirection,
            margin: '20px 0px'
        },
        container:{
            ...commonJustify,
        },
        buttonsContainer: {
            ...commonJustify,
            ...commonDirection
        },
        counter:{
            ...commonAlign
        },
        buttonCart: {
            ...commonAlign,
            marginTop: '10px',
            border: 'solid 1px #31352E',
            fontFamily: 'Bubblegum Sans, cursive',
            ...commonColor,
            '&:hover':{
                color: '#31352E',
                backgroundColor: '#81B622',
            }
        },
        counterButtons:{
            ...commonColor
        }
    })
}