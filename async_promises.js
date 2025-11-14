// TODO: Create a Promise that simulates fetching user data
// - The Promise should resolve after 1.5 seconds
// - User data should include: id, name, email, and registrationDate
// - If userId is negative or zero, reject with an error
// - If userId is positive, resolve with user data object
// // TODO: Create a function that uses template literals for HTML generation
function fetchUserData(){
    const userData = {
        id: 3,
        userName: "Yerr",
        userEmail: "yerryesesss@gmail.com",
        registrationDate: "14 November 2026"
    };
    const userId = userData.id
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (userId > 0) {
                resolve(userData)
            }else if(userId === 0){
              reject(`⚠️ I am not requesting for your ID number, I have no affair with HOME AFFAIRS, ${userId} is not allowed`)
            }
            else{
                reject(`❌ What are you high on, even at Home Affairs an ID doesn't include/contain a negative value, "${userId}" what is this now?`)
            }
        }, 1500);
    })
}

async function main() {
  try {
    const data = await fetchUserData();
    const userTempLit = `<label>name</label>
                         <input>${data.userName}</input>
                         <label>email</label>
                         <input>${data.userEmail}</input>
                         <label>name</label>
                         <input>${data.registrationDate}</input>
    `
    console.log("✅ User data fetched:", userTempLit); 
  } catch (error) {
    console.error(error);
  }
}
main();


// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error

// TODO: Create a function that chains multiple Promises together
// - First fetch user data
// - Then fetch their posts
// - Combine the data into a single object
// - Handle any errors that occur in the chain

// TODO: Convert the above Promise chain to use async/await
// - Use try/catch for error handling
// - Log each step of the process
// - Return combined user and posts data

// TODO: Create a function that fetches multiple users in parallel
// - Take an array of userIds
// - Fetch all users simultaneously using Promise.all
// - Handle errors for individual user fetches
// - Return array of successfully fetched users

// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately

// TODO: Test success cases
// - Test single user fetch
// - Test multiple user fetch
// - Test error handling