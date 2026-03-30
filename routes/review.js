const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {isValidateReview,isLoggedIn,isReviewAuthor}  = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


//POST route

router.post("/",isLoggedIn,isValidateReview, wrapAsync(reviewController.createReview));

//Delete review route

router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;