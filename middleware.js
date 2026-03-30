const Listing = require("./models/listing");
const Review = require("./models/reviews");
const ExpressError = require("./utils/ExpressError");
const { listingSchema } = require("./schema.js");
const { reviewSchema } = require("./schema.js");


module.exports.isLoggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error" , "you must be loggedIn!");
        return res.redirect("/login");
    }
    next();
}


module.exports.saveRedirectUrl = (req,res,next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}


module.exports.isOwner = async(req,res,next) =>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","you don't have the permission to modify");
        return res.redirect(`./listings/${id}`);
    }
    next();
}

module.exports.isValidateListing = (req,res,next) => {
        let {error} = listingSchema.validate(req.body);
        console.log(error);
        if(error){
            let errMsg = error.details.map((el) => el.message).join(",");
            throw new ExpressError(404, errMsg);
        } else {
            next();
        }  
}


module.exports.isValidateReview = (req,res,next) => {
        let {error} = reviewSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el) => el.message).join(",");
            throw new ExpressError(404, errMsg);
        } else {
            next();
        }  
}


module.exports.isReviewAuthor = async(req,res,next) =>{
    let {id,reviewId} = req.params;
    let listing = await Review.findById(reviewId);
    if(!listing.author.equals(res.locals.currUser._id)){
        req.flash("error","you don't have the permission to modify the review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}