import jwt from "jsonwebtoken"
import COMMON_MESSAGES from "../constants/commonMessages.js"
import APISTATUSCODES from "../constants/apiCodes.js"


const getAllRecords = (req, res) => {
    const response = {}
    try {
        const recordId = req.params.id

        // Verify the token
        let decoded;
        try {
            decoded = jwt.verify(recordId, process.env.JWT_SECRET);
        } catch (error) {
            // Handle invalid token here
            response.success = false;
            response.message = COMMON_MESSAGES.BAD_TOKEN;
            return res.status(APISTATUSCODES.BAD_REQUEST).json(response);
        }

        // If the token is valid, proceed with decoding
        response.success = true;
        response.message = COMMON_MESSAGES.GET_LIST;
        response.data = decoded;
        return res.status(APISTATUSCODES.OK).json(response);

    } catch (error) {
        // Handle other errors
        const response = {
            success: false,
            message: COMMON_MESSAGES.SERVER_ERROR
        };
        return res.status(APISTATUSCODES.INTERNAL_SERVER_ERROR).json(response);
    }
};



const postRecord = (req,res) => {
    try {
        const body = {
            name: req.body?.recipientName,
            course: req.body.courseName,
            issuer: req.body?.issuerName,
            issueDate: req.body?.issueDate
        }
        console.log({body})
        const token = jwt.sign(body, process.env.JWT_SECRET);
        const response = {
            success: true,
            token: token,
            message: COMMON_MESSAGES.GET_LIST
        }
        return res.status(APISTATUSCODES.CREATED).json(response)
        
    } catch (error) {
        const response = {}
        console.log(error)
        response = {
            success: false,
            message: COMMON_MESSAGES.SERVER_ERROR
        }
        return res.status(APISTATUSCODES.SERVER_ERROR).json(response)
    }

    

}

export {getAllRecords, postRecord}