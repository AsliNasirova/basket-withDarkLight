import { useState } from "react"

function useDarkMode() {

    const [islight, setIslight] = useState(false)
    
    function changeThemeMode() {
        document.body.classList.toggle("dark")
        setIslight(!islight)
    }
    return {islight, changeThemeMode}
}
export default useDarkMode