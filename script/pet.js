const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const loadPets = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayPets(data.pets))
    .catch((error) => console.log(error));
};

// {
//   "status": true,
//   "message": "successfully fetched all the pets data",
//   "pets": [
//     {
//       "petId": 1,
//       "breed": "Golden Retriever",
//       "category": "Dog",
//       "date_of_birth": "2023-01-15",
//       "price": 1200,
//       "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//       "gender": "Male",
//       "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your 

const displayPets = (pets) => {
  const petContainer = document.getElementById('pet');
  pets.forEach((pets) => {
      console.log(pets)
    const card = document.createElement("div")
      card.classList = "card bg-base-100 w-96 shadow-sm"
      card.innerHTML = 
      `
       <figure>
    <img
      src="${pets.image}"
      alt="Pet" />
  </figure>
  <div class="card-body font-medium ">
      <p><i class="fa-solid fa-qrcode"></i>${pets.breed}</p>
      <p><i class="fa-solid fa-cake-candles"></i>${pets.date_of_birth}</p>
      <p><i class="fa-solid fa-venus"></i>${pets.gender}</p>
      <p><i class="fa-solid fa-dollar-sign"></i>${pets.price}</p>
      <hr class="full text-gray-300">
      <div class="flex justify-between mx-5">
      <button class="btn rounded-full p-2"><i class="fa-solid fa-thumbs-up"></i></button>
      <button class="btn rounded-lg p-5">Adopt</button>
      <button class="btn rounded-lg p-5">Details</button>
      </div>
  </div>
      `
      petContainer.append(card);
  });
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category");

  categories.forEach((item) => {
    console.log(item);

    // create a button
    const button = document.createElement("button");
    button.classList = "btn py-4 lg:px-10 lg:py-7 text-black";
    button.innerText = item.category;

    //add button categoryContainer
    categoryContainer.append(button);
  });
};

loadCategories();
loadPets();
