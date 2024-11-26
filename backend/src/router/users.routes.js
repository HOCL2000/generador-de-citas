import { Router } from "express";
import { getQuotesByEmail, saveUser } from "../controllers/users.js";

const router = Router()

router.get('/:email', getQuotesByEmail)
router.post('/', saveUser)




export default router