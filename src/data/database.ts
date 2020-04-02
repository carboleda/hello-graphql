import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.debug('Connected to mongodb');
    } catch(error) {
        console.error('Error connecting to mongodb', error);
    }
}

export default {
    connect
};