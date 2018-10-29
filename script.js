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
    console.log(pet.title.rendered)
    //make copy of the template
    const copy = template.cloneNode(true);
    copy.querySelector("h1")
}

getPets();