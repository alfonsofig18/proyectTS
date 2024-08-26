import './App.css'

function App() {

  function sayHello(msg: string) {
    return msg;
  }

  const sayHellow = (msg: string) => (msg.length);


  return (
    <>
      <h1>{sayHellow('Hola Alfonsos')}</h1>
    </>
  )
}

export default App
