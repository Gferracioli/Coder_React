import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="Bem-vindo à Loja do Bem!" />
            <ItemListContainer temporario="Ainda estamos desenvolvendo nossos produtos, mais informações em breve." />
        </div>
    );
}

export default App;