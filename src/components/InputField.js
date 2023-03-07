import Label from "./Label"
import Input from "./Input"
import Img from "./Image"
import Textarea from "./TextArea"

const style = {
    inputContainer:{
        marginRight: "auto",
        width: "35%"
    },
    inputMobileContainer:{
        marginRight: "auto",
    },
    textAreaContainer:{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "30%"
    },
    imgLabelFlex: {
        display: "flex",
        alignItems: "center",
    }
}

export default function InputField(props) {
    const variant = (props.type && props.type !== "date")? `${props.type}Container` : "inputContainer"
    return(
        <div style={style[variant]}>
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