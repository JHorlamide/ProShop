export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  if (err.kind === 'ObjectId') {
    return res.status(404).json({
      message: err.message,
      stack: process.env.NODE_EN === 'production' ? null : err.stack,
    });
  }

  // const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // res.status(statusCode);
  // res.json({
  //   message: err.message,
  //   stack: process.env.NODE_ENV === 'product' ? null : err.stack,
  // });
};
