import Img from "./Image"
import Label from "./Label"
import Input from "./Input"

const style = {
    container: {
        width: "30%",
        textAlign: "center",
        position: "relative", 
    },
    img: {
        width: "70%",
        height: "95%",
        objectFit: "cover",
        borderRadius: "5px",
    }
}

export default function ImgInput(props){
    return(
        <div style={style.container}>
            { !props.img && <Label variant="imgInput">Select image</Label>}
            <Img variant="inputImg" src={props.img}/>
            <label className="img-input" htmlFor={props.id || "defaultId"}></label>
            <Input
                id="defaultId"
                {...props}
                variant="none"
                type="file"
            />
        </div>
    )
}