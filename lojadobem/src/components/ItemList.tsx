import React from 'react';
import Item from './Item';

interface ItemProps {
    id: number;
    nome: string;
    descricao: string;
    price: number;
    imagemUrl: string;
}

interface Props {
    items: ItemProps[];
}

const ItemList = ({ items }: Props) => {
    return (
        <div style={styles.grid}>
            {items.map(item => (
                <Item 
                    key={item.id}
                    id={item.id}
                    nome={item.nome}
                    descricao={item.descricao}
                    price={item.price}
                    imagemUrl={item.imagemUrl}
                />
            ))}
        </div>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
    },
};

export default ItemList;