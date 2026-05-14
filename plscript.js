const landscapeGallery = document.getElementById("landscapeGallery");

const landscapes = [

{
  img: "LongPhoto/Photo1.jpg",
  title: "Snow",
  desc: "Yosemite in winter",
  date: "March 14, 2025",
},

{
  img: "LongPhoto/Photo2.jpg",
  title: "Obscure",
  desc: "Yosemite in winter",
  date: "March 14, 2025",
},

{
  img: "LongPhoto/Photo3.jpg",
  title: "Life Goes On",
  desc: "Commute",
  date: "January 31, 2024",
},

{
  img: "LongPhoto/Photo4.jpg",
  title: "Hazy",
  desc: "Yosemite in winter",
  date: "March 15, 2025",
},

{
  img: "LongPhoto/Photo5.jpg",
  title: "Dome",
  desc: "Yosemite in winter",
  date: "January 29, 2024",
},

{
  img: "LongPhoto/Photo6.jpg",
  title: "Bridge",
  desc: "Yosemite in winter",
  date: "March 14, 2025",
},

{
  img: "LongPhoto/Photo7.jpg",
  title: "White Winter Hymnal",
  desc: "Yosemite in winter",
  date: "March 14, 2025",
},

{
  img: "LongPhoto/Photo8.jpg",
  title: "Division",
  desc: "Yosemite in winter",
  date: "March 14, 2025",
},

{
  img: "LongPhoto/Photo9.jpg",
  title: "Mountain",
  desc: "Yosemite in winter",
  date: "March 15, 2025",
},

{
  img: "LongPhoto/Photo10.jpg",
  title: "Mountain",
  desc: "I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord, the Maker of heaven and earth. <br> - Psalm 121:1-2",
  date: "March 15, 2025",
},

{
  img: "LongPhoto/Photo11.jpg",
  title: "Mountain",
  desc: "Yosemite in winter",
  date: "March 15, 2025",
},

{
  img: "LongPhoto/Photo12.jpg",
  title: "Mountain",
  desc: "Yosemite in winter",
  date: "March 15, 2025",
},

{
  img: "LongPhoto/Photo13.jpg",
  title: "Bay",
  desc: "San Francisco",
  date: "August 12, 2025",
},

{
  img: "LongPhoto/Photo14.jpg",
  title: "Joy in the Morning",
  desc: "Jenness Park",
  date: "July 25, 2023",
},

{
  img: "LongPhoto/Photo15.jpg",
  title: "Griffith Observatory",
  desc: "The Lord said to Abram after Lot had parted from him, “Look around from where you are, to the north and south, to the east and west. All the land that you see I will give to you and your offspring forever. <br> - Genesis 13:14-15",
  date: "December 28, 2024",
},

{
  img: "LongPhoto/Photo16.jpg",
  title: "Flow",
  desc: "Jenness Park",
  date: "July 27, 2023",
},

{
  img: "LongPhoto/Photo17.jpg",
  title: "Still",
  desc: "He says, “Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth. <br> - Psalm 46:10",
  date: "July 25, 2024",
},

{
  img: "LongPhoto/Photo18.jpg",
  title: "Silent River",
  desc: "Jenness Park",
  date: "July 25, 2024",
},

{
  img: "LongPhoto/Photo19.jpg",
  title: "Sunlight",
  desc: "CSUEB",
  date: "February 28, 2024",
},

{
  img: "LongPhoto/Photo20.jpg",
  title: "Reflection",
  desc: "Jenness Park",
  date: "July 27, 2023",
},

{
  img: "LongPhoto/Photo21.jpg",
  title: "Quiet",
  desc: "San Francisco",
  date: "May 17, 2024",
},

{
  img: "LongPhoto/Photo22.jpg",
  title: "Bridge",
  desc: "San Francisco",
  date: "April 6, 2026", 
},

{
  img: "LongPhoto/Photo23.jpg",
  title: "Sunset",
  desc: "CSUEB",
  date: "April 7, 2025",
},

{
  img: "LongPhoto/Photo24.jpg",
  title: "A Glimpse of Freedom",
  desc: "CSUEB",
  date: "February 26, 2024",
},

{
  img: "LongPhoto/Photo25.jpg",
  title: "Dining Room",
  desc: "Family trip at Oakhurst.",
  date: "July 6, 2025",
},

{
  img: "LongPhoto/Photo26.jpg",
  title: "Living Room",
  desc: "Family trip at Oakhurst.",
  date: "July 6, 2025",
},

{
  img: "LongPhoto/Photo27.jpg",
  title: "Living Room",
  desc: "Family trip at Oakhurst.",
  date: "July 6, 2025",
},

{
  img: "LongPhoto/Photo28.jpg",
  title: "Luxury",
  desc: "Valley Fair",
  date: "March 9, 2024",
},

{
  img: "LongPhoto/Photo29.jpg",
  title: "Beach",
  desc: "Santa Cruz",
  date: "May 31, 2025",
},

{
  img: "LongPhoto/Photo30.jpg",
  title: "Warm lighting",
  desc: "Sunset at Milpitas",
  date: "March 1, 2026",
},

{
  img: "LongPhoto/Photo31.jpg",
  title: "Warm lighting",
  desc: "Sunset at Milpitas",
  date: "April 5, 2026",
},

{
  img: "LongPhoto/Photo32.jpg",
  title: "Warm lighting",
  desc: "Sunset at Milpitas",
  date: "December 16, 2025",
},

{
  img: "LongPhoto/Photo33.jpg",
  title: "Warm lighting",
  desc: "Sunset at Milpitas",
  date: "September 18, 2024",
},

{
  img: "LongPhoto/Photo34.jpg",
  title: "Cotton Candy",
  desc: "Sunset at San Jose",
  date: "January 17, 2026",
},

{
  img: "LongPhoto/Photo35.jpg",
  title: "Open Skies",
  desc: "Wide horizon",
  date: "December 28, 2024",
},

{
  img: "LongPhoto/Photo36.jpg",
  title: "Golden Time",
  desc: "Sunset in the Philippines",
  date: "December 31, 2022",
},

{
  img: "LongPhoto/Photo37.jpg",
  title: "Purple Horizon",
  desc: "Evening colors",
  date: "March 26, 2025",
},

{
  img: "LongPhoto/Photo38.jpg",
  title: "Lavender",
  desc: "Oracle Park",
  date: "April 18, 2024",
},

{
  img: "LongPhoto/Photo39.jpg",
  title: "Motion blur",
  desc: "Window shot",
  date: "June 16, 2024",
},

{
  img: "LongPhoto/Photo40.jpg",
  title: "Peaceful scenery",
  desc: "Sunset in Milpitas",
  date: "October 21, 2025",
},

{
  img: "LongPhoto/Photo41.jpg",
  title: "Downturn",
  desc: "Sunset in Hayward",
  date: "December 4, 2023",
},

{
  img: "LongPhoto/Photo42.jpg",
  title: "Humble",
  desc: "Oracle Park",
  date: "April 18, 2024",
},

{
  img: "LongPhoto/Photo43.jpg",
  title: "Guidance",
  desc: "Family trip at Oakhurst.",
  date: "July 6, 2025",
},

{
  img: "LongPhoto/Photo44.jpg",
  title: "Twilight",
  desc: "Momentary darkness",
  date: "December 28, 2022",
},

{
  img: "LongPhoto/Photo45.jpg",
  title: "Campus at Night",
  desc: "Night photography",
  date: "August 31, 2023",
},

{
  img: "LongPhoto/Photo46.jpg",
  title: "Stationary",
  desc: "Parking lot in Milpitas",
  date: "January 31, 2024",
},

{
  img: "LongPhoto/Photo47.jpg",
  title: "Downpour",
  desc: "Shot from inside my sister's car.",
  date: "January 31, 2024",
},

{
  img: "LongPhoto/Photo48.jpg",
  title: "Art in motion",
  desc: "My sister helped me for my assignment.",
  date: "February 2, 2024",
},

{
  img: "LongPhoto/Photo49.jpg",
  title: "Origin",
  desc: "My lovely parents.",
  date: "February 2, 2024",
},

{
  img: "LongPhoto/Photo50.jpg",
  title: "Smoke &",
  desc: "Danger",
  date: "March 9, 2024",
},

{
  img: "LongPhoto/Photo51.jpg",
  title: "Mirrors",
  desc: "Vision",
  date: "March 9, 2024",
},

{
  img: "LongPhoto/Photo52.jpg",
  title: "Poetry in Motion",
  desc: "Multiple frames",
  date: "February 14, 2024",
},

{
  img: "LongPhoto/Photo53.jpg",
  title: "Writings on the Wall",
  desc: "Vandalism",
  date: "March 18, 2024",
},

{
  img: "LongPhoto/Photo54.jpg",
  title: "Vision",
  desc: "Glasses",
  date: "January 17, 2024",
},

{
  img: "LongPhoto/Photo55.jpg",
  title: "Spotlight",
  desc: "An ounce of sunlight",
  date: "February 26, 2024",
},

];

landscapes.forEach(photo => {
  landscapeGallery.innerHTML += `
    <div class="mini-polaroid landscape">
      <img src="${photo.img}" alt="${photo.title}">
      <h2>${photo.title}</h2>
      <p class="photo-date">${photo.desc}</p>
      <p>${photo.date}</p>
    </div>
  `;
});