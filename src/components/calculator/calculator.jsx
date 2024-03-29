import { useState } from 'react';
import operatorEnum from '../../enums/operator.enum';

const numberRegex = /^[0-9]*(\.[0-9]*)?$/;

const Calculator = () => {

    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [op, setOp] = useState(operatorEnum.mult);
    const [result, setResult] = useState('');

    const handleNumberInput = (e, setNbInput) => {
        const nbInput = e.target.value.replace(',', '.');

        if (numberRegex.test(nbInput)) {
            setNbInput(nbInput);
        }
    };

    const handleCalcul = (e) => {
        e.preventDefault();

        setResult(res => {
            const v1 = parseFloat(nb1);
            const v2 = parseFloat(nb2);

            switch (op) {
                case operatorEnum.plus:
                    return v1 + v2;
                case operatorEnum.minus:
                    return v1 - v2;
                case operatorEnum.mult:
                    return v1 * v2;
                case operatorEnum.div:
                    return v1 / v2;
                default : 
                    return NaN;
            }
        });
    };

    return (
        <form onSubmit={handleCalcul}>
            <div>
                <label>Nombre 1 : </label>
                <input type="text"
                    value={nb1} onChange={e => handleNumberInput(e, setNb1)} />
            </div>
            <div>
                <label>Operation : </label>
                <select value={op} onChange={e => setOp(e.target.value)}>
                    <option value={operatorEnum.plus}>+</option>
                    <option value={operatorEnum.minus}>-</option>
                    <option value={operatorEnum.mult}>X</option>
                    <option value={operatorEnum.div}>/</option>
                </select>
            </div>
            <div>
                <label>Nombre 2 : </label>
                <input type="text"
                    value={nb2} onChange={e => handleNumberInput(e, setNb2)} />
            </div>
            <div>
                <button type='submit'>Calculer</button>
            </div>
            <div>
                <label>Résultat : </label>
                <input type="text"
                    value={isNaN(result) ? 'Erreur' : result} readOnly />
            </div>
        </form>
    );
};

export default Calculator;