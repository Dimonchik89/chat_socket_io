import { useState, useEffect } from "react";
import SendForm from "./components/form/Form";
import Message from "./components/message/Message";
import io from "socket.io-client"
import './App.css';

const socket = io.connect("http://localhost:4000")

function App() {
  // const ws = new WebSocket("ws://localhost:4000")
  // const [ messages, setMessages] = useState([]);

  // ws.onopen = () => {
  //   console.log("connect");
  // }

  // const sendMessage = (data) => {
  //   ws.send(JSON.stringify(data))
  // }

  // ws.onmessage = ({data}) => {
  //   const message = JSON.parse(data)
  //   setMessages([...messages, message])
  // }

  // useEffect(() => {
  //   console.log("messages", messages);
  // }, [messages])
  const [ messages, setMessages] = useState([]);
  const [ message, setMessage ] = useState("")
  socket.on("connection", () => {
      console.log("connection");
  })

  socket.on("disconect", () => {
      console.log("disconect");
  })

  socket.on("message", (data) => {
      console.log("server response", data);
      setMessages([...messages, data])
  })

  const handleClick = ({e, message}) => {
    e.preventDefault()
    socket.emit("message", message)
    setMessage("")
  }

  useEffect(() => {
    console.log(messages);
  }, [messages])

  return (
    <div className="App">
      <Message messages={messages}/>
      <SendForm handleClick={handleClick}/>
    </div>
  );
}

export default App;
