const sampleListings = [
  {
    title: "My New Villa",
    description: "By the nature",
    image: {
      filename:"listingImage",
      url:"https://tse1.mm.bing.net/th/id/OIP.Qxl3d5hVBbw5H5kfjwZynAHaFg?pid=Api&P=0&h=180",
    },
    price: 1500,
    location: "Calangute, Goa",
    country: "India"
  },
  {
    title: "Sea View Apartment",
    description: "Beautiful apartment with ocean view",
    image:{
      filename:"listingImage",
      url:"https://wallpaperaccess.com/full/2690984.jpg",
    },
    price: 2200,
    location: "Baga, Goa",
    country: "India"
  },
  {
    title: "Mountain Retreat",
    description: "Peaceful stay in the mountains",
    image: {
      filename:"listingImage",
      url:"https://invisionstudio.com/wp-content/uploads/2015/06/Hotels-360-Tours-Property-Photography-Architecural-Photography-Hotel-Photography.jpg",
    },
    price: 1800,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "City Center Studio",
    description: "Compact studio in the heart of the city",
    image: {
      filename:"listingImage",
      url:"https://wallpaperaccess.com/full/7148774.jpg",
    },
    price: 1200,
    location: "Bangalore, Karnataka",
    country: "India"
  },
  {
    title: "Luxury Beach House",
    description: "Premium house near the beach",
    image: {
      filename:"listingImage",
      url:"https://cdn.pixabay.com/photo/2023/04/18/14/46/pool-7935302_1280.jpg",
    },
    price: 3500,
    location: "Kovalam, Kerala",
    country: "India"
  },
  {
    title: "Heritage Haveli",
    description: "Traditional Rajasthani style stay",
    image: {
      filename:"listingImage",
      url:"https://wallpapers.com/images/hd/hotel-background-cwnsftiii6cq0bgl.jpg",
    },
    price: 2000,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Lake Side Cottage",
    description: "Relaxing cottage beside the lake",
    image: {
      filename:"listingImage",
      url:"https://wallpaperaccess.com/full/2690578.jpg",
    },
    price: 1700,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Modern Loft",
    description: "Stylish loft for urban living",
    image: {
      filename:"listingImage",
      url:"https://images.livspace-cdn.com/w:1200/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-2024-1711965337-VsMIK/1homes-1716796480-ZjTwu/8indraneel-1716807448-W0jiY/dr-1716807470-jnpmX.jpg",
    },
    price: 2500,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
  title: "Cozy Hill Cottage",
  description: "A small peaceful cottage in the hills",
  image: {
    filename:"listingImage",
    url:"https://assets.architecturaldigest.in/photos/60083c3a1b516d492c3aaa3c/16:9/w_2560%2Cc_limit/mumbai-apartment-mumbai-flat-Space-Dynamix-1366x768.jpg",
  },
  price: 1400,
  location: "Mussoorie, Uttarakhand",
  country: "India"
},
{
  title: "Beachside Hut",
  description: "Simple hut just steps from the beach",
  image: {
    filename:"listingImage",
    url:"https://www.mcdonaldjoneshomes.com.au/sites/default/files/inline-images/flat-roof-house-designs.jpg",
  },
  price: 900,
  location: "Palolem, Goa",
  country: "India"
},
{
  title: "Luxury Penthouse",
  description: "Top floor penthouse with skyline view",
  image: {
    filename:"listingImage",
    url:"https://www.zurizanzibar.com/media-assets/three-bedroom-villa-gallery-img-3-1800px.jpg",
  },
  price: 5000,
  location: "Delhi",
  country: "India"
},
{
  title: "Forest Cabin",
  description: "A wooden cabin surrounded by forest",
  image: {
    filename:"listingImage",
    url:"https://photos.mandarinoriental.com/is/image/MandarinOriental/bodrum-villa-melisa-exterior?wid=4000&fmt=jpeg,rgb&qlt=63,0&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&icc=sRGB%20IEC61966-2.1&iccEmbed=1&printRes=72&fit=wrap&qlt=45,0",
  },
  price: 1600,
  location: "Coorg, Karnataka",
  country: "India"
},
{
  title: "Desert Camp",
  description: "Experience desert life under the stars",
  image: {
    filename:"listingImage",
    url:"https://img.freepik.com/photos-premium/villa-luxe-bord-mer-piscine-privee-terrasse-terrasse_124507-109281.jpg",
  },
  price: 1300,
  location: "Jaisalmer, Rajasthan",
  country: "India"
},
{
  title: "Riverside Homestay",
  description: "Stay near a calm flowing river",
  image: {
    filename:"listingImage",
    url:"https://www.vf-architectures.fr/public/img/big/ArchitectepourvilladeluxeetprestigeCannesarchitectesVF1jpg_5e9c5280605f4.jpg",
  },
  price: 1100,
  location: "Rishikesh, Uttarakhand",
  country: "India"
},
{
  title: "Tea Garden Bungalow",
  description: "Beautiful bungalow surrounded by tea gardens",
  image: {
    filename:"listingImage",
    url:"https://cdn.pixabay.com/photo/2017/04/18/12/57/residence-2238987_1280.jpg",
  },
  price: 2100,
  location: "Darjeeling, West Bengal",
  country: "India"
},
{
  title: "Island Retreat",
  description: "Relaxing retreat on a tropical island",
  image: {
    filename:"listingImage",
    url:"https://i.pinimg.com/originals/9b/84/cc/9b84cc02a86729219169d8b9a64eb2b5.jpg",
  },
  price: 4000,
  location: "Havelock Island, Andaman",
  country: "India"
},
{
  title: "Urban Studio Apartment",
  description: "Modern studio perfect for city travelers",
  image: {
    filename:"listingImage",
    url:"https://toanhuyhoang.com/wp-content/uploads/2021/08/ocean-villas-resort-scaled.jpg",
  },
  price: 1500,
  location: "Hyderabad, Telangana",
  country: "India"
},
{
  title: "Countryside Farmhouse",
  description: "Experience peaceful village life",
  image: {
    filename:"listingImage",
    url:"https://tse2.mm.bing.net/th/id/OIP.vkh96gUiS6bRIwcgd-4fNwHaEa?pid=Api&P=0&h=180",
  },
  price: 1200,
  location: "Lonavala, Maharashtra",
  country: "India"
},
];


module.exports = { data: sampleListings};