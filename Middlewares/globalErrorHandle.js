export const globalErrorHandle = (err , req , res , next) => {
    const msg = err.message;
    res.status(422).json({
        message: msg
    })
}