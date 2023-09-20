import './App.css';
import FruitSelection from './components/FruitSelection.jsx';
import Button from "./components/Button.jsx";
import InputFields from "./components/InputFields.jsx";
import {useState} from "react";
function App() {
const [formState, setFromstate] = useState({
    firstname: "",
    lastname: "",
    age: 0,
    zipCode:"",
    frequency: "weekly",
    duringDay: false,
    duringNight: false,
    comments: "",
    newsletter: false,

});

function changeHandler(e){
    setFromstate({
        ...formState,
        [e.target.name]: e.target.value
    })
}

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }



  return (
    <main>
        <section>
            <FruitSelection
            typeOfFruit=" 🍓 Aardbeien"
            />
            <FruitSelection
                typeOfFruit="🍌 Bananen"
            />
            <FruitSelection
                typeOfFruit="🍏 Appels"
            />
            <FruitSelection
                typeOfFruit="🥝 Kiwi's"
            />
        </section>
        <section>
            <form onSubmit={handleSubmit}>
                <InputFields
                id="first-name-field"
                labelText="Voornaam"
                type="text"
                name="firstname"
                value={formState.firstname}
                onChange={changeHandler}

                />
                <InputFields
                    id="last-name-field"
                    labelText="Achternaam"
                    type="text"
                    name="lastname"
                />
                <InputFields
                    id="age-field"
                    labelText="Leeftijd"
                    type="number"
                    name="age"
                />
                <InputFields
                    id="zip-code-field"
                    labelText="Postcode"
                    type="Text"
                    name="zipCode"
                />
                <label htmlFor="frequency">Bezorgfrequentie</label>
                <select name="frequency"
                        id="frequency">
                    <option value="weekly">Wekelijks</option>
                    <option value="monthly">Maandelijks</option>
                    <option value="quarterly">Elk kwartaal</option>
                    <option value="yearly">Jaarlijks</option>
                </select>
                <div className="form-group1">
                <InputFields
                    id="time-of-day"
                    labelText="Overdag"
                    type="radio"
                    name="duringDay"
                />
                    <InputFields
                        id="time-of-day"
                        labelText="'s Avonds"
                        type="radio"
                        name="duringNight"
                    />
                </div>
                <div className="form-group2">
                <label htmlFor="comment-section">Opmerkingen</label>
                <textarea name="comments"
                          id="comment-section"
                          cols="30"
                          rows="10">
                </textarea>
                </div>
                <InputFields
                    id="newsletter"
                    labelText="Ik ga akkoord met de algemene voorwaarden"
                    type="checkbox"
                    name="newsletter"
                />
                <Button
                    buttonText="Verzend"
                    buttonType="submit"
                />
            </form>
        </section>
    </main>
  )
}
export default App
