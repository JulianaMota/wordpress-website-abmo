//global variables
// grab template
const template = document.querySelector("#pet-template").content;

//fetch content
function getPets(){
    fetch("http://abmostudio.com/kea/wordpress/wp-json/wp/v2/pets?_embed")
    .then(res => res.json())
    .then(showPets)
}


function showPets(petList){
    console.log(petList)
    petList.forEach(showSinglePet)
}

function showSinglePet(pet){
    console.log(pet._embedded["wp:featuredmedia"])
    //make copy of the template
    const copy = template.cloneNode(true);
    copy.querySelector("h1").textContent=pet.title.rendered;
    copy.querySelector(".type span").textContent=pet.acf.type_of_pet;
    copy.querySelector(".gender span").textContent=pet.acf.gender;
    copy.querySelector(".specie span").textContent=pet.acf.specie;
    copy.querySelector(".price span").textContent=pet.acf.price;
    copy.querySelector(".body").innerHTML=pet.content.rendered;
    copy.querySelector("img").src=pet._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;


    document.querySelector("main").appendChild(copy);
}

getPets();