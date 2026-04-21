const Listing = require("../models/listing");

// Define categories
const CATEGORIES = [
    "Apartment",
    "House",
    "Villa",
    "Cabin",
    "Beach House",
    "Mountain Retreat",
    "Farmhouse",
    "Studio",
    "Condo",
    "Hostel",
    "Resort",
    "Hotel",
    "Cottage",
    "Boat",
    "Treehouse"
];

module.exports.index = async(req,res) =>{
    const { category } = req.query;
    let query = {};
    
    if (category && category !== "all") {
        query.category = category;
    }
    
    const allListings = await Listing.find(query);
    res.render("listings/index",{ allListings, selectedCategory: category || "all", categories: CATEGORIES });
};

module.exports.renderNewForm = (req,res) =>{
    res.render("listings/new.ejs", { categories: CATEGORIES });
}


module.exports.showListing = async(req,res) =>{
    let {id} =  req.params;
    const listing = await Listing.findById(id).populate({path: "reviews",
        populate:{
            path: "author",
        },
    }).populate("owner");
    // if(!listing){
    //     req.flash("error","Listing you requested for does not exist");
    // }
    //  return res.redirect("/listings");
    res.render("listings/show", { listing });
}


module.exports.createListing = async (req,res,next) =>{
        let url = req.file.path;
        let filename = req.file.filename;
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = {url,filename};
        await newListing.save();
        req.flash("success","New Listing Created!");
        res.redirect("/listings");
        };

module.exports.renderEditForm = async(req,res) =>{
    let {id} =  req.params;
    const listing = await Listing.findById(id);
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/h_300,w_250");
    res.render("listings/edit", { listing, originalImageUrl, categories: CATEGORIES });
}


module.exports.updateListing = async(req,res) =>{
    let {id} =  req.params;
    let listing = await Listing.findByIdAndUpdate(id , {...req.body.listing});
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
    }
    req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`);
}

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findById(id);

    delete req.body.listing.image;

    // Update other fields
    Object.assign(listing, req.body.listing);

    // If new image uploaded → replace
    if (req.file) {
        console.log("new image",req.file.path);
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    } 

    await listing.save();

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async(req,res) =>{
    let {id} =  req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
}