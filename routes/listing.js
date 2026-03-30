const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,isValidateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});



router.route("/")
.get(wrapAsync(listingController.index))//index
.post(isLoggedIn,upload.single("listing[image]"),wrapAsync(listingController.createListing));//create


//new route

router.get("/new",isLoggedIn, listingController.renderNewForm);


router.route("/:id")
.get(wrapAsync(listingController.showListing)) //show
.put(isLoggedIn,isOwner,upload.single("listing[image]"), wrapAsync(listingController.updateListing)) // update
.delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));


//edit route

router.get("/:id/edit",isLoggedIn,isOwner,isValidateListing,wrapAsync(listingController.renderEditForm));

module.exports = router;