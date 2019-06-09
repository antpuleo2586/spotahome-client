import React from 'react';
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";
import '../App.css';
import logo from '../logo.svg';

const client = new ApolloClient({
    uri: "https://ants-spotahome-server.herokuapp.com/"
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </ApolloProvider>
    );
}

export default App;
