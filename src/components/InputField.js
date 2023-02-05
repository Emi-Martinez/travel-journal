import Label from "./Label"
import Input from "./Input"
import Img from "./Image"
import Textarea from "./TextArea"

const style = {
    container:{
        marginRight: "auto"
    },
    textAreaContainer:{
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    imgLabelFlex: {
        display: "flex",
        alignItems: "center",
    }
}

export default function InputField(props) {
    return(
        <div style={props.type !== "textArea" ? style.container : style.textAreaContainer}>
            <div style={style.imgLabelFlex}>
                {props.img && <Img variant="labelImg" src={props.img} /> }
                <Label>
                    {props.children || "Input field"}
                </Label>
            </div>
            {
            props.type !== "textArea" ? 
                <Input {...props} children={null} /> 
            :
                <Textarea {...props} children={null} />
            }
        </div>
    )
}