const express = require ('express') ;
const bodyParser = require ('body-parser') ; 
const cors = require ('cors') ;
const morgan = require ('morgan') ;
const dotenv = require ('dotenv') ;
const mongoose = require ('mongoose') ;
const color = require ('color') ;
const DBconnect = require ('./DB/conDB.js');
const productRouter = require ('./routes/productRoutes.js');
const  userRouter  = require('./routes/userRoutes.js');
const billsRouter = require('./routes/billsRoutes.js');
dotenv.config();
const app = express() ;

//middlewares 
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(morgan("dev"));


app.use('/api/products/', productRouter);
app.use('/api/users/', userRouter);
app.use('/api/bills/', billsRouter);
DBconnect()
// listen on port 
const port = process.env.PORT
app.listen(port , (error)=>{
    error?console.log(error) : console.log(`server is running on : http://localhost:${port}`)
})