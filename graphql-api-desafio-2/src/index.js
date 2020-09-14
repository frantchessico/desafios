import express from 'express';
import graphqlHTTP from "express-graphql";
import schema from "./graphql/schema";

import { connect } from "./db/database";


const app = express();
connect();

app.set('port', process.env.PORT || 4200);



app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    context: {
        messageId: 1
    }
}))


app.listen(app.get('port'), () => {
    console.log('>>> Server on port', app.get('port'));
});
