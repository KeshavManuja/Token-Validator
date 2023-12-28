import express from "express"
import api from "./routes/index.js"
import COMMONMESSAGES from "./constants/commonMessages.js"
import STATUSCODES from "./constants/apiCodes.js"
import cors from "cors"
const app = express()

app.use((req,res,next) => {
    res.header('Content-Type', 'application/json;charset=UTF-8');
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use(express.json())
app.use(cors())
app.use("/", api)
app.use(function (req, res, next) {
    console.log(req.originalUrl)
    const response = {
        success: false,
        message: COMMONMESSAGES.BAD_REQUEST
    }
    res.status(STATUSCODES.NOT_FOUND).json(response)
});

export default app;