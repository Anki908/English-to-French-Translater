import express from "express";
import {translateLang} from '../Controllers/translationController.js';
import { validateTextInput } from '../Middlewares/inputValidation.js';

const router = express.Router();

router.route('/englishtofrench').post(validateTextInput , translateLang);

export default router;

