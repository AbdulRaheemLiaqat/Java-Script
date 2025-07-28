const name = null;
const defaultName = name || "Guest";  // "Guest" because name is null
const isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");  // Executes because true && ...