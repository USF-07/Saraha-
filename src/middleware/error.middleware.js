export function globalErrMiddleware(error, req, res, next) {
  res.status(error.cause?.statusCode || 400).json({
    message: error.message,
    err_stack: error.stack,
    error,
  });
}
