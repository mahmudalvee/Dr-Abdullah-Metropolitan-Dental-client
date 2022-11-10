import { useEffect } from "react"

const useTitle= title => {
    useEffect( () => {
        document.title = `${title}- Metropolitan Dental`;

    }, [title])
}

export default useTitle;