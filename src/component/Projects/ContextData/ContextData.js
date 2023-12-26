// +++++++++ useContext Creation Procedure: +++++++++++++
// 1. createContext() assign to a variable
// 2. Create Custom Component
// 3. Create a Provider
// 4. Crate Custom Hook


// 1. createContext() assign to a variable
import { useContext } from "react";
import { useState } from "react"
import { createContext } from "react"

const GiftContext = createContext()

// 2. Create Custom Component 3. Create a Provider
export const GiftProvider = ({children})=>{
    const [giftData, setGiftData] = useState("Hi this is gift Message")
    return(
        <GiftContext.Provider value={{giftData, setGiftData}}>
            {children}
        </GiftContext.Provider>
    )
}
// 4. Crate Custom Hook
export const useGiftData = ()=> useContext(GiftContext)


// Using this useContext data in PropsDrilling Project.........->