import mongoose from 'mongoose';



const Connection = async () => {
    const URL = "mongodb+srv://mohan111:mohan111@cluster0.fnbwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;