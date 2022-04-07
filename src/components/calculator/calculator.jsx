import { useState } from "react";

const Calculator = () => {

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(e);

        switch (operator) {
            case '+':
                setResult(result => nb1 + nb2);
                break;
            case '-':
                setResult(result => nb1 - nb2);
                break;
            case '*':
                setResult(result => nb1 * nb2);
                break;
            case '/':
                setResult(result => nb1 / nb2);
                break;

            default:
                break;
        }
    };


    const [nb1, setNb1] = useState(0);
    const [nb2, setNb2] = useState(0);
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState("...");


    return (

        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="nb1">NB1 :</label>
                <input type="text" name="nb1" id="nb1" placeholder={nb1}
                    onChange={(e) => { setNb1(e.target.value); }} />

                <label htmlFor="operator">operator</label>
                <select name="operator" value={operator} id="operator"
                    onChange={(e) => setOperator(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">x</option>
                    <option value="/">/</option>
                </select>

                <label htmlFor="nb2">NB2 :</label>
                <input type="text" name="nb2" id="nb2" placeholder={nb2}
                    onChange={(e) => { setNb2(e.target.value); }} />

                <button type="submit">Calculate</button>

                <input type="text" name="result" value={result} disabled />

            </form >



        </>

    );


};


export default Calculator;