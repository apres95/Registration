// array of objects to store existing user data
// body = document.querySelector("body");
// var body = document.getElementById('body') 
// var getImage = document.createElement("img");
// getImage.setAttribute("src",'../img/questionmark.jpg');
// body.appendChild(getImage);


var existingUsers = [
	{
		user: "phone",
		pass: "mississippi"
	},
	{
		user: "user",
		pass: "password"
	}
]

var newUser = {
		user: username.value,
		password: password.value
	}

function register(){
	// store the tag with id="sign" in var username
	var username = document.getElementById("username")
	// store the tag with id="sign" in var password
	var password = document.getElementById("password")
	// store the tag with id="results" in var results
	var results = document.getElementById('results')

	console.log(username, password, results)
	console.log("username value is: " + username.value)
	console.log("password value is: " + password.value)

	var newUser = {
		user: username.value,
		password: password.value
	}

	for(i = 0; i < existingUsers.length; i = i + 1) {
		console.log(existingUsers[i]);
	if (username.value.toLowerCase() === existingUsers[i].user){
			console.log("User Already Exists") 
			results.className = 'failure'
	// update the text of the results element to display a failure message
	results.textContent = "User Already Exists!"
			return
		} 
	}

	existingUsers.push(newUser)

	console.log("Welcome to our site! Try logging in.")
	results.className = 'success'
			// update the text of the results element to display a success message
			results.textContent = "Welcome! Try logging in. "

			console.log(existingUsers)
	}


// function to determine if the user exists and the password matchs that user, function fires on user clicking button line 28 index.html
function login() {
	// store the tag with id="sign" in var username
	var username = document.getElementById("username")
	// store the tag with id="sign" in var password
	var password = document.getElementById("password")
	// store the tag with id="results" in var results
	var results = document.getElementById('results')

	existingUsers.push(newUser)

	// confirm the element exists and then what value the user submits
	console.log(username, password, results)
	console.log("username value is: " + username.value)
	console.log("password value is: " + password.value)
	
	// loop through existing users array one item at a time 
	for(i = 0; i < existingUsers.length; i = i + 1) {
		// check each user as you loop through the array of objects
		console.log(existingUsers[i])
		if((username.value.toLowerCase() === existingUsers[i].user || newUser.user) && (password.value.toLowerCase() === existingUsers[i].pass || newUser.password)) {
			// check to see if the IF statement code block executed
			console.log("if statement ran, so we have a match!")
   			// change class of results to let the user know it worked 
			results.className = 'success'
			// update the text of the results element to display a success message
			results.textContent = "Welcome! "

			// stop the function from running any further cause we got a match!!!
			return
		} 
	}
	
	// run failure if username and password didn't match
	console.log("Wrong answers")
	// change class of results to let the user know it failed
	results.className = 'failure'
	// update the text of the results element to display a failure message
	results.textContent = "Wrong User Name and Password!"
}
