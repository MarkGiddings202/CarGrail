// When adding more cars to the db, be sure to add it here like this {brandmodel}: imageUrl (Find an image from anywhere)
const carImageMap = {
    fordfusion: 'https://www.autotrader.com/wp-content/uploads/2020/08/WC_2019-Ford-Fusion-Hybrid-Copper-Action-1.jpg',
    hondaaccord: 'https://www.motortrend.com/uploads/2022/02/2023-Honda-Accord-rendering-01.jpg',
    lamboaventador: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Lamborghini_Aventador_LP700-4_Orange.jpg'
}

document.getElementById("logoutBtn").addEventListener("click", (e) => {
  axios.get("/users/logout");
  window.location = "/signup?loggedOut=true";
});

const carsContainer = document.getElementById("cars-container");

const displayCars = (cars) => {
  cars.forEach((car) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by4">
      <img class="car-image" src=${carImageMap[car.brand.toLowerCase() + car.model.toLowerCase()]} alt=${car.model}>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${car.model}</p>
        <p class="subtitle is-6">${car.brand}</p>
      </div>
    </div>

    <div class="content">
      ${car.price}
    </div>
  </div>
</div>
    `;
    carsContainer.appendChild(card);
  });
};

const getCars = async (user) => {
  try {
    const response = await axios.post("/cars", { budget: user.budget });
    displayCars(response.data);
  } catch (err) {
    console.log(err);
  }
};

const getUserData = async () => {
  try {
    const response = await axios.get("/users/getById");
    console.log(response.data);
    getCars(response.data);
  } catch (err) {
    console.log(err);
  }
};

getUserData();
