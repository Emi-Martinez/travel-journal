import { useEffect } from "react";
import { responsiveActions } from "../store/responsive-slice";

const useWindowSize = (dispatch) =>{
    useEffect(()=>{   
        const setDimensions = () => {            
            const width = window.innerWidth
            dispatch(responsiveActions.setResponsive(width))                  
        }
        
        window.addEventListener('resize', setDimensions())
        return () => window.removeEventListener('resize', setDimensions())
    },[dispatch])    
}

export default useWindowSize
