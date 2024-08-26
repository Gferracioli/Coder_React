import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount inicial={1} stock={10} onAdd={(contador) => console.log(`Quantidade adicionada: ${contador}`)} />
        </div>
    );
};

export default ItemListContainer;