import './App.css';
import FruitSelection from './components/FruitSelection.jsx';
import Button from "./components/Button.jsx";
function App() {

  return (
    <main>
        <section>
            <FruitSelection
            typeOfFruit="Aardbeien"
            />
            <FruitSelection
                typeOfFruit="Bananen"
            />
            <FruitSelection
                typeOfFruit="Appels"
            />
            <FruitSelection
                typeOfFruit="Kiwi's"
            />
            <Button
                buttonText="Reset"
                // clickHandler=
            />
        </section>
        <section>

        </section>
    </main>
  )
}

export default App
