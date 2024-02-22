import { body , validationResult } from "express-validator";

const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req , res , next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                const errorMessages = errors.array().map((error) => error.msg);
                //console.log(errorMessages[0]);
                throw new Error(errorMessages[0]);
            }
            next();
        }
    ]
}

export const validateTextInput = withValidationErrors([
    body('text').notEmpty().withMessage('Please enter the text'),
])