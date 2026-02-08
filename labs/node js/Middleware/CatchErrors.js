export function catchErrors(fn) {
    return (req, res, next) => {
        fn(req, res, next).catch((err) => {
            next(err); // Forward error to the global error
        });
    };
}

export function globalErrorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: "error",
        message: err.message || "Internal Server Error",
    });
}