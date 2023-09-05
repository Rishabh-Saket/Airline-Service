const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');
const CityRepository=require('./repository/city-repository');
const ApiRoutes=require('./routes/index');
const db=require('./models/index');
const setupAndStartServer= async ()=> {
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);
    
    app.listen(PORT,()=>{
        console.log(`Server is ready to listen on port ${PORT}`);
        if(process.env.SYNC_DB){
            db.Sequelize.sync({alter: true});
        }
    });
}

setupAndStartServer();