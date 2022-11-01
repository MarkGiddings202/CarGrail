// When adding more cars to the db, be sure to add it here like this {brandmodel}: imageUrl (Find an image from anywhere)
const carImageMap = {
  nissanaltima:
    "https://mysterio.yahoo.com/mysterio/api/9A79FF07E1AD9A29B3C3E7AF861F7FBF5AA405CD13105CDAF6002E8B72E183FA/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD20NIC041A021001.jpg",
  mazda3:
    "https://www.mazdausa.com/siteassets/vehicles/2023/m3h/06_btv/ext-360s/2.5/snowflake-white-pearl/e360-my22-m3h-2-5s-snowflake-white-pearl-005.jpg",
  volkswagentiguan:
    "https://www.edmunds.com/assets/m/for-sale/b2-3vv3b7ax2km192535/img-1-600x400.jpg",
  fordfusion:
    "https://www.autotrader.com/wp-content/uploads/2020/08/WC_2019-Ford-Fusion-Hybrid-Copper-Action-1.jpg",
  hondaaccord:
    "https://www.motortrend.com/uploads/2022/02/2023-Honda-Accord-rendering-01.jpg",
  toyotacamry:
    "https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2020/07/MY21_Camry_XSE_Hybrid_001-1500x900.jpg",
  lamboaventador:
    "https://upload.wikimedia.org/wikipedia/commons/9/97/Lamborghini_Aventador_LP700-4_Orange.jpg",
  mtametrocard:
    "https://www.silive.com/resizer/yQg3RAkNRo-yD2Mxpw1t8SATk2c=/arc-anglerfish-arc2-prod-advancelocal/public/GR3RKAEJJVEGDAAOJS3PYFUJR4.jpg",
  bmwx: "https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2018/bmw-m2-coupe-edition-black-shadow/bmw-m2-coup%C3%A9-black-shadow-stage-teaser-si.jpg",
  rangeroversuv:
    "https://pictures.dealer.com/l/landroverchesterfieldlr/0287/4d8e7652ec25c71841ce3f69d605e8fcx.jpg?impolicy=downsize&w=568",
  lectricxpebike:
    "http://cdn.shopify.com/s/files/1/0229/0735/5214/products/BST-Side-Basic-Square.jpg?v=1665471897",
  teslas:
    "https://www.teslarati.com/wp-content/uploads/2018/08/tesla-roadster-matte-black-1-e1534872442960.jpeg",
};

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
      <img class="car-image" src=${
        carImageMap[car.brand.toLowerCase() + car.model.toLowerCase()]
      } alt=${car.model}>
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
