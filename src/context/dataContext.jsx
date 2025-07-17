import { useState, createContext } from "react";

export const dataContext = createContext();

export const DataContextProvider = ({children}) => {
    const [dataVerse, setDataVerse] = useState(null);
    const [dataPromise, setDataPromise] = useState(null); 

    return (
        <dataContext.Provider value={{
            verse: {data: dataVerse, setData: setDataVerse},
            promise: {data: dataPromise, setData: setDataPromise}
        }}>
            {children}
        </dataContext.Provider>
    )
}