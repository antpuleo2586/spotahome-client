import React from 'react';
import {ApolloProvider} from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";
import { Query } from "react-apollo";
import NavBar from './NavBar'
import Loader from './Loader'
import Error from './Error'
import Room from './Room'

const client = new ApolloClient({
    uri: "https://ants-spotahome-server.herokuapp.com/"
});

const query = gql`
{
    rooms(city: "madrid") {
        title
        photoUrls{
          homecard
        }
        monthlyPrice {
          minimumPrice
        }
        currencySymbol
    }
}
`

function App() {
    return (
        <ApolloProvider client={client}>
            <NavBar title="Spotaroom" />
            <Query
                query={query}
            >
                {({ loading, error, data }) => {
                    if (loading) return <Loader />;
                    if (error) return <Error />;

                    return data.rooms.map((room) => (
                        <Room key={room.id} room={room} />
                    ));
                }}
            </Query>
        </ApolloProvider>
    );
}

export default App;
