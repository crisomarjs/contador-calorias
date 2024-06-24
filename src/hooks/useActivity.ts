import { useContext } from "react";
import { ActivityContex } from "../context/ActivityContext";

export const useActivity = () => {
    const context = useContext(ActivityContex)
    if (!context) {
        throw new Error('El hook useActivity debe ser utilizado en un ActivityProvider')
    }
    return context
}