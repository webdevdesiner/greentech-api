import { createContext, useContext, useState } from "react"
import api from "../services/api"


const initialUser = {

    email: "",
    senha: "",
    nome: '',
    endereco: "",
    bairro: "",
    cidade: "",
    uf: "",
    cep: "",
}

const initialProdutos = {

    nome: "",
    marca: "",
    estado_uso: "",
    descricao: "",
    data: "",
    preco: "",
    usuarios_id: "",
}

const initialfaleConosco = {

    email: "",
    mensagem: "",
    nome: "",
    telefone: "",
}






const GlobalContext = createContext(undefined);


const GlobalProvider = ({ children }) => {
    const [logado, setLogado] = useState(false);

    const addUsuario = async (usuario) => {
        console.log(usuario)
        const fetchUsuario = async () => { await api.post('/usuarios', usuario) }
        await fetchUsuario()
    }


    const addLogin = async (login) => {
        console.log(login)
        const fetchLogin = async () => { await api.post('/login', login) }
        await fetchLogin()
    }

    const addProduto = async (produto) => {
        console.log(produto)
        const fetchProduto = async () => { await api.post('/produtos', produto) }
        await fetchProduto()
    }


    const addfaleConosco = async (faleconosco) => {
        console.log(faleconosco)
        const fetchfaleConosco = async () => { await api.post('/faleconosco', faleconosco) }
        await fetchfaleConosco()
    }


    return <GlobalContext.Provider value={{ addUsuario, addLogin, addProduto, addfaleConosco, logado, setLogado }}>
        {children}
    </GlobalContext.Provider>;
}


const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('usePostContext deve ser usado dentro de um PostProvider')
    }
    return context;
}

export {
    initialfaleConosco,
    initialUser,
    initialProdutos,
    GlobalProvider,
    useGlobalContext
}