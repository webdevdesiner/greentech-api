import React from 'react'
import './style.css'

const Chat = () => {
    return (


        <body className='corpao' >
            <div className='HomeArea'>

            <div className='Tela'></div>

            

                <div className="chat-container">
                <div className='Blacked'>

                </div>
                <div className="input-container">
                    <input type="text" id="userInput" placeholder="Digite sua mensagem..."></input>
                    <button onclick="sendMessage()">Enviar</button>
                </div>

            </div>
            </div>
        </body>
    )
}

export default Chat