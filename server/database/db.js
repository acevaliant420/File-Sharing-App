import mongoose from 'mongoose';

const DBconnection = async () => {
    const MONODB_URL = `mongodb://user:user@ac-2qzklpn-shard-00-00.bh26gqe.mongodb.net:27017,ac-2qzklpn-shard-00-01.bh26gqe.mongodb.net:27017,ac-2qzklpn-shard-00-02.bh26gqe.mongodb.net:27017/?ssl=true&replicaSet=atlas-fqzpdg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file-sharing-app`;
    try {
        await mongoose.connect(MONODB_URL, {useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting database', error.message);
    }
};

export default DBconnection;