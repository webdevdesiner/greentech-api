import { createContext, useContext, useState } from "react"
import api from "../services/api"
 

const initialUser = {

    login: "",
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
    estado_uso:"",    
    descricao: "",
    data: "",
    preco: "",    
    usuarios_id:"",
    }    
    



 
 
const GlobalContext = createContext(undefined);
 
 
const GlobalProvider = ({ children }) => {
 
    const addUsuario = async (usuario) => {
        console.log(usuario)
        const fetchUsuario = async () => {await api.post('/usuarios', usuario)}
        await fetchUsuario()
    }


    const addLogin = async (login) => {
        console.log(login)
        const fetchLogin = async () => {await api.post('/login', login)}
        await fetchLogin()
    }

    const addProduto = async (produto) => {
        console.log(produto)
        const fetchProduto = async () => {await api.post('/produtos', produto)}
        await fetchProduto()
    }

 
    return <GlobalContext.Provider value={{addUsuario, addLogin, addProduto}}>
        {children}
    </GlobalContext.Provider>;
}
 
 
const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if(!context) {
        throw new Error('usePostContext deve ser usado dentro de um PostProvider')
    }
    return context;
}
 
export {
    initialUser,
    initialProdutos,
    GlobalProvider,
    useGlobalContext
}