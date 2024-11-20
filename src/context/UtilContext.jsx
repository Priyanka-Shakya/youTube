import { createContext, useContext, useState } from "react";

const UtilContext = createContext(null);

export const UtilsContextProvider = ({children}) =>{
    const[isSidebar, setIsSidebar] = useState(false);
    const[mobileshow, setMobileShow] = useState(false);

    return <UtilContext.Provider value={{isSidebar, setIsSidebar, mobileshow, setMobileShow}}>
        {children}
    </UtilContext.Provider>
}

export const useUtils = ()=>{
    const utilsContext = useContext(UtilContext);

    if(!utilsContext) return null;
    return utilsContext;
}