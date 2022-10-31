if(document.cookie) {
	window.location = '/home'
}


const signupForm = document.getElementById('signup-form');
const formContainer = document.getElementById('signup-form-container');
const getLoginBtn = document.getElementById('loginButton');

const REGISTER_API = '/users';
const LOGIN_API = '/users/login';

const formatFormData = (rawFormData) => {
    const formObj = {}
    for (item of rawFormData) {
        formObj[item[0]] = item[1]
    }
    return formObj;
}

const registerNewUser = async (apiEndpoint, data) => {
	try {
		const response = await axios.post(apiEndpoint, data)
		console.log(response);
	} catch (err){
		console.log(err);
	}
}

const loginUser = async (apiEndpoint, data) => {
	try {
		const response = await axios.post(apiEndpoint, data)
		console.log(response);
		if(document.cookie) {
			window.location = '/home';
		}
	} catch (err){
		console.log(err);
	}
}

const loginForm = () => {
	return `
	<form id="login-form">
	<div class="login-form">
	<h1>Log In </h1>
		<div class="field">
			<label class="label">Email</label>
			<div class="control">
				<input id="email" name="email" class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
			</div>
		</div>
		<div class="field">
			<label class="label">Password</label>
			<div class="control">
				<input id="password" name="password" class="input" type="password" placeholder="Text input">
			</div>
			<p class="help">This is a help text</p>
		</div>
		 <input id="submitButton" type="submit" value="Log In" class="button is-success" /> 
	</div>
</form>
	`
}

const swapToLogin = () => {
	formContainer.innerHTML = loginForm();
	const loginHtmlForm = document.getElementById("login-form");
		loginHtmlForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const loginFormData = new FormData(loginHtmlForm);
			const loginData = formatFormData(loginFormData);
			loginUser(LOGIN_API, loginData);
		})
}

if (window.location.search) {
	swapToLogin();
}


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const signupFormData = new FormData(signupForm);
    const signupData = formatFormData(signupFormData);
    // send a POST request   
    registerNewUser(REGISTER_API, signupData);
		swapToLogin()
})

getLoginBtn.addEventListener('click', (e) => {
	swapToLogin()
})







