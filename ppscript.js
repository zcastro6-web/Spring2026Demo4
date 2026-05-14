const portraitGallery = document.getElementById("portraitGallery");

const portraits = [
{
  img: "ShortPhoto/photo1.jpg",
  title: "Night Flight",
  desc: "Photos from the plane when I was on the way back to the US after visiting from the Philippines.",
  date: "January 12, 2023",
},

{
  img: "ShortPhoto/photo2.jpg",
  title: "Night Lights",
  desc: "Night",
  date: "January 12, 2023",
},

{
  img: "ShortPhoto/photo3.jpg",
  title: "All of the Lights",
  desc: "Night",
  date: "January 12, 2023",
},

{
  img: "ShortPhoto/photo4.jpg",
  title: "Late Night",
  desc: "Police Actvity.",
  date: "August 29, 2024",
},

{
  img: "ShortPhoto/photo5.jpg",
  title: "Late Night",
  desc: "Friend.",
  date: "August 29, 2024",
},

{
  img: "ShortPhoto/photo6.jpg",
  title: "Midnight Ride",
  desc: "Friend car",
  date: "March 1, 2025",
},

{
  img: "ShortPhoto/photo7.jpg",
  title: "Beacon of Hope",
  desc: "City at Night",
  date: "April 19, 2026",
},

{
  img: "ShortPhoto/photo8.jpg",
  title: "Classroom",
  desc: "Dark Class",
  date: "October 2, 2025",
},

{
  img: "ShortPhoto/photo9.jpg",
  title: "Jesus Christ",
  desc: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. <br> - John 3:16",
  date: "March 10, 2024",
},

{
  img: "ShortPhoto/photo10.jpg",
  title: "Noir",
  desc: "Street lights",
  date: "January 31, 2024",
},

{
  img: "ShortPhoto/photo11.jpg",
  title: "Bright Lights",
  desc: "San Francisco",
  date: "April 18, 2024",
},

{
  img: "ShortPhoto/photo12.jpg",
  title: "Starry Night",
  desc: "Lift up your eyes and look to the heavens: Who created all these? He who brings out the starry host one by one and calls forth each of them by name. Because of his great power and mighty strength, not one of them is missing. <br> - Isaiah 40:26",
  date: "July 24, 2024",
},

{
  img: "ShortPhoto/photo13.jpg",
  title: "Dreamy Night",
  desc: "When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them, human beings that you care for them? <br> - Psalm 8:3-4",
  date: "July 23, 2024",
},

{
  img: "ShortPhoto/photo14.jpg",
  title: "Portrait BW",
  desc: "Old friend",
  date: "December 9, 2022",
},

{
  img: "ShortPhoto/photo15.jpg",
  title: "Mountain",
  desc: "Yosemite in snow.",
  date: "March 14, 2025",
},

{
  img: "ShortPhoto2/photo16.jpg",
  title: "Winter gaze",
  desc: "Yosemite in snow.",
  date: "March 14, 2025",
},

{
  img: "ShortPhoto2/photo17.jpg",
  title: "Serenity",
  desc: "Yosemite in snow.",
  date: "March 14, 2025",
},

{
  img: "ShortPhoto2/photo18.jpg",
  title: "Rest",
  desc: "Yosemite in snow.",
  date: "March 14, 2025",
},

{
  img: "ShortPhoto2/photo19.jpg",
  title: "Bridge",
  desc: "Yosemite in snow.",
  date: "March 14, 2025",
},

{
  img: "ShortPhoto2/photo20.jpg",
  title: "Lake",
  desc: "Yosemite in snow.",
  date: "March 14, 2025",
},

{
  img: "ShortPhoto2/photo21.jpg",
  title: "Crow",
  desc: "Yosemite in snow.",
  date: "March 14, 2025",
},

{
  img: "ShortPhoto2/photo22.jpg",
  title: "Twice the pride, double the fall",
  desc: "- Count Dooku",
  date: "March 14, 2025",
},

{
  img: "ShortPhoto2/photo23.jpg",
  title: "Waterfall",
  desc: "Yosemite in snow.",
  date: "March 15, 2025",
},

{
  img: "ShortPhoto2/photo24.jpg",
  title: "Waterfall",
  desc: "Yosemite in snow.",
  date: "March 15, 2025",
},

{
  img: "ShortPhoto2/photo25.jpg",
  title: "Tunnel View",
  desc: "Yosemite in snow.",
  date: "March 15, 2025",
},

{
  img: "ShortPhoto2/photo26.jpg",
  title: "A Storm is Coming",
  desc: "Yosemite in snow.",
  date: "March 15, 2025",
},

{
  img: "ShortPhoto2/photo27.jpg",
  title: "Cold",
  desc: "Yosemite in snow.",
  date: "March 14, 2025",
},

{
  img: "ShortPhoto2/photo28.jpg",
  title: "Tunnel View",
  desc: "Yosemite in snow.",
  date: "March 15, 2025",
},

{
  img: "ShortPhoto2/photo29.jpg",
  title: "'I am a man of fortune, and I must seek my fortune.'",
  desc: "- Sir Francis Drake",
  date: "March 15, 2025",
},

{
  img: "ShortPhoto2/photo30.jpg",
  title: "Tilted Towers",
  desc: "Yosemite in snow.",
  date: "March 15, 2025",
},

{
  img: "ShortPhoto3/photo31.jpg",
  title: "Overhanging Rock",
  desc: "Glacier Point",
  date: "July 8, 2025",
},

{
  img: "ShortPhoto3/photo32.jpg",
  title: "Philippines",
  desc: "A view of the University of the Cordilleras from SM (mall in Baguio)",
  date: "December 15, 2022",
},

{
  img: "ShortPhoto3/photo33.jpg",
  title: "Joy in the Morning",
  desc: "A beautiful shot of nature in the morning.",
  date: "July 23, 2024",
},

{
  img: "ShortPhoto3/photo34.jpg",
  title: "Fountain of Youth",
  desc: "Philippines",
  date: "December 15, 2022",
},

{
  img: "ShortPhoto3/photo35.jpg",
  title: "Pathway",
  desc: "Cupertino",
  date: "June 16, 2024",
},

{
  img: "ShortPhoto3/photo36.jpg",
  title: "History",
  desc: "San Jose",
  date: "June 30, 2024",
},

{
  img: "ShortPhoto3/photo37.jpg",
  title: "Close Up",
  desc: "Texture",
  date: "August 31, 2023",
},

{
  img: "ShortPhoto3/photo38.jpg",
  title: "Prismatic",
  desc: "Mariposa",
  date: "March 16, 2025",
},

{
  img: "ShortPhoto3/photo39.jpg",
  title: "Flower of Evil",
  desc: "Milpitas",
  date: "July 10, 2025",
},

{
  img: "ShortPhoto3/photo40.jpg",
  title: "Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it. But small is the gate and narrow the road that leads to life, and only a few find it.",
  desc: "Matthew 7:13-14",
  date: "July 7, 2025",
},

{
  img: "ShortPhoto3/photo41.jpg",
  title: "Hallway",
  desc: "Family trip at Oakhurst.",
  date: "July 6, 2025",
},

{
  img: "ShortPhoto3/photo42.jpg",
  title: "Living Room",
  desc: "Family trip at Oakhurst.",
  date: "July 6, 2025",
},

{
  img: "ShortPhoto3/photo43.jpg",
  title: "Inception",
  desc: "Paris Baguette mirror",
  date: "June 19, 2024",
},

{
  img: "ShortPhoto3/photo44.jpg",
  title: "Guidance",
  desc: "Your word is a lamp for my feet, light on my path. -Psalm 119:105",
  date: "July 26, 2024",
},

{
  img: "ShortPhoto3/photo45.jpg",
  title: "Portait Warm",
  desc: "Big boi Daniel",
  date: "December 9, 2022",
},

{
  img: "ShortPhoto4/photo46.jpg",
  title: "Perfect capture",
  desc: "Sunset on Campus",
  date: "April 7, 2025",
},

{
  img: "ShortPhoto4/photo47.jpg",
  title: "Cotton Candy",
  desc: "Sunset on Campus",
  date: "March 10, 2025",
},

{
  img: "ShortPhoto4/photo48.jpg",
  title: "Freeway",
  desc: "Sunset at Fremont",
  date: "March 1, 2026",
},

{
  img: "ShortPhoto4/photo49.jpg",
  title: "Tranquility",
  desc: "Sunset at Los Angeles",
  date: "December 28, 2024",
},

{
  img: "ShortPhoto4/photo50.jpg",
  title: "Let It Go",
  desc: "Sunset at Milpitas",
  date: "September 13, 2022",
},

{
  img: "ShortPhoto4/photo51.jpg",
  title: "Skywalker",
  desc: "Sunset at Milpitas",
  date: "September 13, 2022",
},

{
  img: "ShortPhoto4/photo52.jpg",
  title: "Dinner",
  desc: "What I ate after a tough shift",
  date: "July 14, 2024",
},

];

portraits.forEach(photo => {
  portraitGallery.innerHTML += `
    <div class="mini-polaroid portrait">
      <img src="${photo.img}" alt="${photo.title}">
        <h2>${photo.title}</h2>
        <p class="photo-date">${photo.desc || ""}</p>
        <p>${photo.date}</p>
    </div>
  `;
});
