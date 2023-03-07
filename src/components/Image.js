const style = {
    cardImg:{
        width: "125px",
        height: "168px",
        objectFit: "cover",
        borderRadius: "5px",
    },
    inputImg:{
        width: "70%",
        height: "95%",
        objectFit: "cover",
        borderRadius: "5px",
    },
    labelImg:{
        marginRight: "5px",
    }
    
}

export default function customImage(props){
    return(
        <img alt="" style={style[props.variant]} {...props}/>
    )
}