const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category");

  categories.forEach((item) => {
    console.log(item);

    // create a button
    const button = document.createElement("button");
    button.classList = "btn lg:px-10 py-7 bg-white text-black border-[#e5e5e5]";
    button.innerText = item.category;

    //add button categoryContainer
    categoryContainer.append(button);
  });
};

loadCategories();
