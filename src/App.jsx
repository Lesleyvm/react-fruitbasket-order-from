import './App.css';
import FruitSelection from './components/FruitSelection.jsx';
import Button from "./components/Button.jsx";
import InputFields from "./components/InputFields.jsx";
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
            <form>
                <InputFields
                id="first-name-field"
                labelText="Voornaam"
                type="text"
                name="firstname-field"
                />
                <InputFields
                    id="last-name-field"
                    labelText="Achternaam"
                    type="text"
                    name="lastname-field"
                />
                <InputFields
                    id="age-field"
                    labelText="Leeftijd"
                    type="number"
                    name="age-field"
                />
                <InputFields
                    id="zip-code-field"
                    labelText="Postcode"
                    type="Text"
                    name="zip-code-field"
                />
                <label htmlFor="frequency">Bezorgfrequentie</label>
                <select name="frequency"
                        id="frequency">
                    <option value="weekly">Wekelijks</option>
                    <option value="monthly">Maandelijks</option>
                    <option value="quarterly">Elk kwartaal</option>
                    <option value="yearly">Jaarlijks</option>
                </select>
                <div>
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
                <label htmlFor="comments">Opmerkingen</label>
                <textarea name="comment-section"
                          id="comments"
                          cols="30"
                          rows="10">
                </textarea>
                <InputFields
                    id="newsletter"
                    labelText="Ik ga akkoord met de algemene voorwaarden"
                    type="checkbox"
                    name="checkbox"
                />
                <Button
                    buttonText="Verzend"
                    buttonType="submit"
                    // clickHandler=
                />
            </form>
        </section>
    </main>
  )
}
export default App
