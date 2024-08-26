import React, { useState } from 'react';

const ItemCount = ({ inicial, stock, onAdd }) => {
    const [contador, setContador] = useState(inicial);

    const geraAumento = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const geraDecremento = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div style={styles.container}>
            <button onClick={geraDecremento} style={styles.button}>-</button>
            <span style={styles.contador}>{contador}</span>
            <button onClick={geraAumento} style={styles.button}>+</button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    contador: {
        fontSize: '18px',
    },
};

export default ItemCount;