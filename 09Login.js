function solve(arr) {
  let username = arr.shift();

  for (let i = 1; i <= 4; i++) {
    let attempt = arr.shift();
    attempt = attempt.split("").reverse().join("");
    if (username == attempt) {
      console.log(`User ${username} logged in.`);
      return;
    }
    if (i === 4) {
        console.log(`User ${username} blocked!`);
        
        return;
    }
    console.log("Incorrect password. Try again.");
  }
}
solve(["Acer", "login", "go", "let me in", "recA"]);
solve(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
