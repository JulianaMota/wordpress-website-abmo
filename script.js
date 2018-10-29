//global variables
// grab template
const template = document.querySelector("#pet-template").content;

//fetch content
function getPets(){
    fetch("http://abmostudio.com/kea/wordpress/wp-json/wp/v2/pets")
    .then(res => res.json())
    .then(showPets)
}


function showPets(petList){
    console.log(petList)
    petList.forEach(showSinglePet)
}

function showSinglePet(pet){
    console.log(pet)
    //make copy of the template
    const copy = template.cloneNode(true);
    copy.querySelector("h1").textContent=pet.title.rendered;
    copy.querySelector(".type span").textContent=pet.acf.type_of_pet;
    copy.querySelector(".gender span").textContent=pet.acf.gender;
    copy.querySelector(".specie span").textContent=pet.acf.specie;
    copy.querySelector(".price span").textContent=pet.acf.price;
    copy.querySelector(".body").innerHTML=pet.content.rendered;


    document.querySelector("main").appendChild(copy);
}

getPets();