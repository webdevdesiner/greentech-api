import { useQuery } from "react-query"
import { getAnuncios } from "../../requests/show"
import { useNavigate } from "react-router-dom"

export const useAnucios = () => {
    const { data: anuncios, isLoading} = useQuery(['getAnuncios'], getAnuncios)
    const navigate = useNavigate();

    const handleClickDetails = (id) => {
        navigate(`/anuncios/${id}`)
    }
    return {
        isLoading,
        anuncios,
        handleClickDetails
    }
}