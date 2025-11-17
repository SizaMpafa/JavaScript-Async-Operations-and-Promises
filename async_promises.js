// TODO: Create a Promise that simulates fetching user data
// - The Promise should resolve after 1.5 seconds
// - User data should include: id, name, email, and registrationDate
// - If userId is negative or zero, reject with an error
// - If userId is positive, resolve with user data object
// // TODO: Create a function that uses template literals for HTML generation

function fetchUserData(){
  const userData = {
    id: 1,
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



// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error
const fetchUserPosts =  async () => {
  const user = await fetchUserData();
  let users = [user]
  try{
    const posts = [
      {
        id: 1,
        postTitle: "Ezitshisayo",
        postContent: "Loooooo, nguZibeqengeshe waseNgqushwa",
        postBelongs: user.id
      },
      {
        id: 2,
        postTitle: "Crossing The Bridge",
        postContent: "Pluto My Planet",
        postBelongs: user.id
      },
      {
        id: 3,
        postTitle: "Mikhulu Production",
        postContent: "Sikuphatheli ndaba zishushu zinjalo",
        postBelongs: user.id
      }
    ]
   
      const readline = require("readline");
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });


    const guessedUserId = await new Promise((resolve) => {
      rl.question("Guess which user number has posts: ", (answer) => {
        rl.close();
        resolve(Number(answer));
      });
    });

    const postUserId = posts[2].postBelongs
            return new Promise((resolve, reject)=>{
              setTimeout(() => {
                if (guessedUserId !== postUserId ){
                  reject(`User number ${guessedUserId} does not exist. We only have  ${users.length} user and  that user's id is ${postUserId} , so we can't fetch posts for user number ${guessedUserId}?`)
                } else{
                  resolve(posts)
                }  
              }, 1000)
            })
  } catch (error) {
    throw error;
  }
}


// TODO: Create a function that chains multiple Promises together
// - First fetch user data
// - Then fetch their posts
// - Combine the data into a single object
// - Handle any errors that occur in the chain

const fetchUserAndPosts = async () => {
  return fetchUserData()
    .then((user) => {
      console.log("✔ User data fetched via chain");
      return fetchUserPosts().then((posts) => ({ user, posts })); 
    })
    .catch((error) => {
      console.error("❌ Error in chained Promises:", error);
      throw error; 
    });
  }

  // TODO: Convert the above Promise chain to use async/await
  // - Use try/catch for error handling
  // - Log each step of the process
  // - Return combined user and posts data

  const converetedFetchUserAndPosts = async () => {
    try{
        return fetchUserData()
        .then((procurer) => {
        console.log("✔ User data fetched via chain");
        console.log("✔ User posts fetched via chain");
        console.log("✔ Combining User Data & User Posts");
        return fetchUserPosts().then((publications) => ({procurer, publications})); 
    })
    }catch(error) {
      console.error("❌ Error in chained Promises:", error);
      throw error; 
    }
  }
  
  // TODO: Create a function that fetches multiple users in parallel
  // - Take an array of userIds
  // - Fetch all users simultaneously using Promise.all
  // - Handle errors for individual user fetches
  // - Return array of successfully fetched users

  // const fetchMultipleUsers = async () => {
  //   const defaultUser = await fetchUserData();
  //   let users = [defaultUser]
  //   console.log(" curent users",users);
  //   const user2 = {
  //     id: 2,
  //     userName: "Yhoooo",
  //     userEmail: "yhooothixo@gmail.com",
  //     registrationDate: "15 November 2026"
  //   }
  //   const user3 = {
  //     id: 3,
  //     userName: "Yehake",
  //     userEmail: "yehakeyesuuuu!@gmail.com",
  //     registrationDate: "19 November 2026"
  //   }
  //   users.push(user2)
  //   users.push(user3)
  //   console.log(" Updated users",users);
  //   console.log("creating an array of user ids");
  //   const userIds = [defaultUser.id, user2.id, user3.id]
  // try{
  //   const fetchingAllUsers = await Promise.all(userIds)
  //   console.log("All users fetched successfully:", fetchingAllUsers);
  //   return fetchingAllUsers;
  // }catch(error){
  //  console.error(error);
  // }
  // try{
  //   fetchingAllUsers.forEach(fetchedUser => {
  //     console.log("One of the fetched users:", fetchedUser)
  //     return fetchedUser
  //   });
    
  // }catch(error){
  //  console.error(error, "couldn't be fetched");
  // }}

  const fetchMultipleUsers = async () => {
  const defaultUser = await fetchUserData();
  let users = [defaultUser]
  console.log(" curent users",users);

  const user2 = {
    id: 2,
    userName: "Yhoooo",
    userEmail: "yhooothixo@gmail.com",
    registrationDate: "15 November 2026"
  }

  const user3 = {
    id: 3,
    userName: "Yehake",
    userEmail: "yehakeyesuuuu!@gmail.com",
    registrationDate: "19 November 2026"
  }

  users.push(user2)
  users.push(user3)

  console.log(" Updated users",users);
  console.log("creating an array of user ids");

  const userIds = [defaultUser.id, user2.id, user3.id]

  const fetchSingleUser = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const found = users.find(u => u.id === id);
        if (found){
          resolve(found);
        } 
        else{ 
          reject(`❌ User with id ${id} not found`);
        }
      }, 800);
    });
  };

  try{
    const fetchingAllUsers = await Promise.all(
      userIds.map(id => fetchSingleUser(id))
    );

    console.log("All users fetched successfully:", fetchingAllUsers);
    return fetchingAllUsers;

  }catch(error){
    console.error(error);
  }

  try{
    const fetchingAllUsers = await Promise.all(
      userIds.map(id => fetchSingleUser(id))
    );
    fetchingAllUsers.forEach(fetchedUser => {
      console.log("One of the fetched users:", fetchedUser)
      return fetchedUser
    });

  }catch(error){
    console.error(error, "couldn't be fetched");
  }
}

// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately

const fetchUsersAndPostsInParallel = async () => {
  try {
    console.log("⏳ Fetching users in parallel...");
    const allUsers = await fetchMultipleUsers()
    const userIds = allUsers.map(u => u.id)
    const users = await Promise.all(
      userIds.map(id =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (id > 0) {
              resolve({
                id,
                userName: `User ${id}`,
                email: `user${id}@gmail.com`
              });
            } else {
              reject(`❌ Invalid user ID: ${id}`);
            }
          }, 700);
        })
      )
    );

    console.log("⏳ Fetching posts for each user...");

    const posts = await Promise.all(
      users.map(user =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve([
              { id: 1, title: `Post 1 by User ${user.id}`, userId: user.id },
              { id: 2, title: `Post 2 by User ${user.id}`, userId: user.id }
            ]);
          }, 1000);
        })
      )
    );
    console.log(posts)

    return users.map((user, i) => ({
      user,
      posts: posts[i]
    }));

  } catch (error) {
    console.error("❌ Error fetching users and posts in parallel:", error);
    throw error;
  }
};



// TODO: Test success cases
// - Test single user fetch
// - Test multiple user fetch
// - Test error handling

const testParallelFetch = async () => {
  console.log("\n--- TEST: Single User ---");
  try {
    await fetchUsersAndPostsInParallel([1]);
  } catch (e) {}

  console.log("\n--- TEST: Multiple Users ---");
  try {
    await fetchUsersAndPostsInParallel([1, 2, 3]);
  } catch (e) {}

  console.log("\n--- TEST: Error Case ---");
  try {
    await fetchUsersAndPostsInParallel([1, -2]);
  } catch (e) {}
};

const main = async () => {
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

  try {
    const post = await fetchUserPosts();
    console.log("✅ User posts fetched:", post);
  } catch (error) {
    console.error(error);
  }
  
  try {
    const combined = await fetchUserAndPosts();
    console.log("📌 Combined result from chained Promises:", combined);
    console.log("---------------------------------------------")
    console.log(combined.user)
    console.log("---------------------------------------------")
    console.log(combined.posts[2].postContent)
    console.log("---------------------------------------------")
  } catch (error) {
    console.error(error);
  }
  try {
    const combined = await converetedFetchUserAndPosts();
    console.log("📌 The Converted Combined result from chained Promises:", combined);
    console.log("---------------------------------------------")
    console.log(combined.procurer.userName)
    console.log("---------------------------------------------")
    console.log(combined.publications[0].postTitle)
    console.log("---------------------------------------------")
  }
   catch (error) {
    console.error(error);
  }
  try{
    const multipleUsers = await fetchMultipleUsers()
    console.log("📌 Fetched all the users:", multipleUsers);
  } catch (error) {
    console.error(error);
  }
  try{
    const usersAndPostsInParallel = await fetchUsersAndPostsInParallel()
    console.log("📌 Fetched all the users And posts:", usersAndPostsInParallel);
  } catch (error) {
    console.error(error);
  }
  try{
    const tests = await testParallelFetch();
    console.log("📌 Yho hayyyy:", tests);
  } catch (error) {
    console.error(error);
  }
  
}
main();





// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately

// TODO: Test success cases
// - Test single user fetch
// - Test multiple user fetch
// - Test error handling