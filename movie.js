let movie_name = ["Suzume",
    "One Piece Film: Red",
    "Your Name",
"Weathering with You",
"I Want to Eat Your Pancreas",
"Jujutsu Kaisen 0"];
let movies_image_url = ["https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Suzume_no_Tojimari_poster.jpg/220px-Suzume_no_Tojimari_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/4/44/One_Piece_Film_Red_Visual_Poster.jpg",
    "https://contentserver.com.au/assets/525768_gnau_yourname_p_v7_aa.jpg",
"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQfOdEbHH72lyRyInEvbHzQQDMjNJzlaBUHewJ8JkdwSkPWMam",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYT6QMSNAxCZBGSlcB2f-spseLNK-7Y6xDe_lXb_-W_Ldh7mNd",
"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdodPgSefqjeMjBSwRQGknu5qd2vjIYIovPUePaCplC_Vlxk07",];
let movie_desc = ["A modern action adventure road story where a 17-year-old girl named Suzume helps a mysterious young man close doors from the other side that are releasing ...",
    `Uta is a beloved singer, renowned for concealing her own identity when performing. Her voice is described as "otherworldly." Now, for the first time ever, Uta will reveal herself to the world at a live concert.`,
    `Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.
`,`Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.`,
`An aloof boy comes across a book in a hospital waiting room. He soon discovers that it is a diary kept by his very popular classmate who reveals to him that she is secretly suffering from a fatal pancreatic illness.`,
`Yuta Okkotsu gains control of an extremely powerful, cursed spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by sorcerers to help him control his power and keep an eye on him.`,
];
for(let i in movie_name){
    let html_insert = `     <div  class="card mb-3" style="max-width: 540px;">   <div class="row g-0">
    <div class="col-md-4">
      <img src="${movies_image_url[i]}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${movie_name[i]}</h5>
        <p class="card-text">${movie_desc[i]}</p>
      </div>
    </div>
  </div>
  </div>`
  document.getElementById("movie_card").insertAdjacentHTML("beforeend",html_insert)
}