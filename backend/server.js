import dotenv from "dotenv"
dotenv.config()
import  http  from "http"
import app from "./app.js"
const httpServer =  http.createServer(app)

httpServer.listen(process.env.PORT, () => {
    try {
        console.log("Port is started at port:", process.env.PORT)
    } catch (error) {
        console.log("error",error)
    }
})