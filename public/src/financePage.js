document.getElementById("logoutBtn").addEventListener("click", (e) => {
  axios.get("/users/logout");
  window.location = "/signup?loggedOut=true";
});

const form = document.getElementById("finance-form");
const updateBtn = document.getElementById("updateButton");
const formatFormData = (rawFormData) => {
  const formObj = {};
  for (item of rawFormData) {
    formObj[item[0]] = item[1];
  }
  return formObj;
};

const populateData = (data) => {
  Object.keys(data).forEach((key) => {
    if (!["id", "user_id", "password"].includes(key)) {
      const input = document.querySelector(`#${key}`);
      input.value = data[key];
    }
  });
};

const getUserData = async () => {
  try {
    const response = await axios.get("/users/getById");
    populateData(response.data);
  } catch (err) {
    console.log(err);
  }
};

const updateUserData = async (data) => {
  try {
    const response = await axios.put("/users", data);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

getUserData();

updateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formObj = formatFormData(formData);
  console.log(formObj);
  updateUserData(formObj);
  window.location.reload();
});
