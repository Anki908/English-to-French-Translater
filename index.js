import express from 'express';
import transRoute from './Routes/transRoute.js';
import {globalErrorHandle} from './Middlewares/globalErrorHandle.js'

const app = express();
app.use(express.json());

app.use('/api/v1/translate' , transRoute);

app.use("*", (req, res) => {
    res.status(400).json({
        msg: "Route Not Found",
    });
});
  
app.use(globalErrorHandle);

app.listen(5100 , () => {
    console.log("server started");
})