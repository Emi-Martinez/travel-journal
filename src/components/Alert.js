import Label from "./Label";

export default function Alert(props){
    return(
        <div className="alert">
            <Label>{props.message}</Label>
        </div>
    )
}