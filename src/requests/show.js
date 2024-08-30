import api from "../services/api"

export const getAnuncios = async () => {
    return api.get('/anuncios').then(res => res.data)
}

export const getAnuncio = async ({queryKey}) => {
    const [, { id }] = queryKey
    return api.get(`/anuncios/${id}`).then(res => res.data)
}

