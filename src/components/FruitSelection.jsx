import {useState} from "react";
import Button from "./Button.jsx";
function FruitSelection({typeOfFruit}) {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    const resetCount = () => {
        setCount(0);
    };

    console.log(count)

    return (
        <div className="fruit-block">
            <h2>{typeOfFruit}</h2>
            <Button
            buttonText="-"
            clickHandler={decrementCount}
            />
            <h2>{count}</h2>
            <Button
                buttonText="+"
                clickHandler={incrementCount}
            />
            <Button
                buttonText="Reset"
                clickHandler={resetCount}
            />
        </div>
    )
}
    export default FruitSelection;