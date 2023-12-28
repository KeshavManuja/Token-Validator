import express from "express"
import cors from "cors"
import { getAllRecords, postRecord } from "../controllers/tokenController.js"
const router = express.Router()

router.use(cors())

router.get("/record/:id", getAllRecords)
router.post("/record", postRecord)

export default router