import { createContext, useContext, useState } from "react";

export const addResponseContext = createContext({})
export const deleteResponseContext = createContext({})
export const editResponseContext = createContext({})

function ContextShare({ children }) {
    const [addResponse, setAddResponse] = useState([])
    const [deleteResponse, setDeleteResponse] = useState([])
    const [editResponse, setEditResponse] = useState([])

    return (
        <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
            <deleteResponseContext.Provider value={{ deleteResponse, setDeleteResponse }}>
                <editResponseContext.Provider value={{editResponse,setEditResponse}}>
                    {children}
                </editResponseContext.Provider>
            </deleteResponseContext.Provider>
        </addResponseContext.Provider>
    )
}

export default ContextShare