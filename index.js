// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Resource not found");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

async function fetchData(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

async function displayAnimal() {
  try {
    document.getElementById("wait").innerHTML = "Please Wait...";
    const pokiname = document.getElementById("animalname").value.toLowerCase();
    console.log("Fetching data...");
    const animalData = await fetchData(pokiname);
    document.getElementById("wait").innerHTML = "";
    console.log("animal data retrieved..");
    console.log(animalData);
    const pokemonIMG = animalData.sprites.front_default;
    const imgElement = document.getElementById("pokemonsprite");
    imgElement.src = pokemonIMG;
    imgElement.style.display = "block";
  } catch (error) {
    console.error("Failed to fetch animal data");
  }
}
document.getElementById("btn").addEventListener("click", displayAnimal);
