import Header from "./components/Header/Header"
import Information from "./components/Information/Information"
import Form from "./components/Form/Form"
import "./App.scss"

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <img
          className="main__image"
          src="./main-image.png"
          alt="grapes, wine and cheese"
        />
        <Information />
        <Form />
      </main>
    </div>
  )
}

export default App
