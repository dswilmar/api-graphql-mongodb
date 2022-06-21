import { ApolloServer } from 'apollo-server';
import mongoose, { mongo } from 'mongoose';
require('dotenv').config();

function startServer({ typeDefs, resolvers }) {

    mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => console.log(`Servidor rodanado: ${url}`));
}

export default startServer;