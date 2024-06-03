// // const mongoose = require('mongoose');

// // const connectDatabase = ()=>{
// //     mongoose.connect(process.env.DB_LOCAL_URI,{
// //         useNewUrlParser:true,
// //         useUnifiedTopology:true
// //     }).then(con=>{
// //         console.log(`MongoDB is connected to the host: ${con.connection.host} `)
// //     })
// // }

// // module.exports = connectDatabase;

// const mongoose = require('mongoose');

// const connectDatabase = () => {
//     mongoose.connect(process.env.DB_URL).then((con) => {
//         console.log('MongoDB connected to host: '+con.connection.host)
//     })
// };

// module.exports = connectDatabase;
const mongoose = require('mongoose');

const connectDatabase = () => {
    // Set strictQuery option to suppress the deprecation warning
    mongoose.set('strictQuery', false);

    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MongoDB is connected to the host: ${con.connection.host}`);
    }).catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    });
};

module.exports = connectDatabase;
