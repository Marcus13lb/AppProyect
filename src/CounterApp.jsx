import {useState} from 'react';
import PropTypes from 'prop-types';
//{}estas llaven en hmtl simbolizan una expresion de javascript
// el event registra en que coordenadas hicimos clicks entre otras cosas
//Cuando cambia el estato con el useState el componente se vuelve a ejecutar
export const CounterApp = ({ value }) => {
    const [ counter, setCounter ] = useState(value);
    const handleAdd = () => {
        setCounter( counter + 1 );
    }
    const handleDel = () => {  
        setCounter( counter - 1 );
    }
    const handleRest = () => {
        setCounter( value );
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleDel }>
                -1
            </button>
            <button onClick={ handleRest }>
                Reset
            </button>
        </>
         
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

