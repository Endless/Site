const catchAsyncErrors = fn => (
    (req, res, next) => {
        const route = fn(req, res, next);
        if(route.catch)
            route.catch(err => next(err));
    });

exports.catchAsync = catchAsyncErrors;