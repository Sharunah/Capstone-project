const form = document.querySelector("form")
const container = document.querySelector("image-container")

form.addEventListener("submit"),(e)=>(
    e.preventDefault();
    const query = form.querySelector("input").value
    console.log(query);

    omdbapi(query);

)

async function omdbapi(query)
   const req = await fetch("http://www.omdbapi.com/?t=$(query)&apikey=eead09f1")
   const movies = await req.json();

   makeImages(movies); 


   function makeimages (movies)
    for(let movie of movies)
        let src= movie.show.image.medium;

    const img = document.createElement("img");
    img.src=src;

    container.appendChild(img);
   






