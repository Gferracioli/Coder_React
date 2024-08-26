import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import listadeproduto from './components/listadeproduto';
import ListadeProdutos from './components/listadeproduto';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="Bem-vindo à Loja do Bem!" />
            <ListadeProdutos />
        </div>
    );
}

export default App;