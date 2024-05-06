import mongoose from 'mongoose';

const URI = 'mongodb+srv://pavloruban1:oWdtXQIGkZBraE1i@cluster0.xsqvzrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((e) => {
    console.error(e)
});

export default mongoose;
