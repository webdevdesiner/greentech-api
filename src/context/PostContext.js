import { createContext, useContext, useState } from "react"
 
// const dataSaveInitial = [
//     {id: 1, nome: 'Fernando', mensagem: 'Hoje tem aula?', data: '04/04/2024 17:15'},
//     {id: 2, nome: 'Timoteo', mensagem: 'Sim fernando hoje tem!!', data: '04/04/2024 17:20'}
// ]

const userInitial = [
    {id: 1, nome: 'FernandoGuedes', cpf: '32875164856', email: 'fernando.oguedes@senacsp.edu.br', senha: '123456', nascimento: '04/01/1982', genero: 'masculino', rg: '440784141', perfilUsuario: 'comprador', endereco: 'Rua Marieta Tenorio', numero: '302', complemento: 'casa'},

    {id: 2, nome: 'Timotio M santos', cpf: '40111807859', email: 'timotio.vendedor@senacsp.edu.br', senha: '123456', nascimento: '07/11/1990', genero: 'masculino', rg: '4571547841', perfilUsuario: 'Comprador', endereco: 'Rua senac', numero: '521', complemento: 'casa'}
]

const cadProdutoInitial = [
    {id: 1,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
{id: 1,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
{id: 2,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
{id: 3,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
{id: 4,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
{id: 5,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
{id: 6,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
{id: 7,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
{id: 8,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
{id: 9,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
{id: 10,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
{id: 11,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
{id: 12,
    nomeProduto: 'placa mae',
    preco: '199,00',
    quantidade:'10',
    descricao:'Marca: Asus - Modelo: 90MB19N0-C1BAY0 Especificações: CPU: - Soquete Intel® LGA1700'
},
]

 
const initialUser = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    nascimento: '',
    genero: '',
    rg: '',
    perfilUsuario: '',
    endereco: '',
    numero: '',
    complemento: ''
}

const initialCadProdutos = {
    nomeProduto: '',
    preco: '',
    quantidade:'',
    descricao:''
}
 
const UserContext = createContext(undefined);

const CadProvider = ({ children }) => {
    const [produtos, setProdutoss] = useState(initialCadProdutos);
 
    const addProdutos = (produto) => {
        setProdutoss([...produtos, produto]);
    }
 
    const removeProdutos = (id) => {
        const index = produtos.findIndex(produto => produto?.id === id);
        if (index !== -1) {
            setProdutoss([
                ...produtos.slice(0, index),
                ...produtos.slice(index+1, produtos.length)
            ])
        }
    }
 
  
}
 
const UserProvider = ({ children }) => {
    const [users, setUsers] = useState(userInitial);
 
    const addUser = (user) => {
        setPosts([...users, user]);
    }
 
    const removeUser = (id) => {
        const index = users.findIndex(user => user?.id === id);
        if (index !== -1) {
            setUsers([
                ...users.slice(0, index),
                ...users.slice(index+1, users   .length)
            ])
        }
    }
 
    return <UserContext.Provider value={{users, addUser, removeUser,produtos,addProdutos,removeProdutos}}>
        {children}
    </UserContext.Provider>;
}

 
const userPostContext = () => {
    const context = useContext(UserContext);
    if(!context) {
        throw new Error('usePostContext deve ser usado dentro de um PostProvider')
    }
    return context;
}
 
export {
    initialUser,
    cadProdutoInitial,
    initialCadProdutos,
    UserProvider,
    userPostContext
}