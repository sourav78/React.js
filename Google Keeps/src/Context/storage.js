import { createContext, useContext } from "react";

export const StorageContext = createContext({
    notes: [
        {
            id: 1,
            title: "hyy",
            note: "Hello"
        }
    ]
})

export const useStorage = () => {
    return useContext(StorageContext)
}

export const StorageProvider = StorageContext.Provider