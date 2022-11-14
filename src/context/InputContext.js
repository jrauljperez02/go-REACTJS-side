import { createContext, useState } from "react";

const InputContext = createContext()
export default InputContext;

export const InputProvider = ({children}) => {
    const [inputNav, setInputNav] = useState('');


    let contextData = {
        inputNav,
        setInputNav,
    }

    return (
        <InputContext.Provider value={contextData}>
            {children}
        </InputContext.Provider>
    )
}