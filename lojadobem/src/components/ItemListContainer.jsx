import React from 'react';

const ItemListContainer = ({ greeting, temporario }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <h3>{temporario}</h3>
        </div>
    );
};

export default ItemListContainer;