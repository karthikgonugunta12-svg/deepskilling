const eventName = "Music Festival";
const eventDate = "2025-07-20";
let seats = 50;

console.log(`${eventName} on ${eventDate}`);

function registerUser() {
    if (seats > 0) {
        seats--;
        console.log(`Registration Successful. Seats Left: ${seats}`);
    } else {
        console.log("No Seats Available");
    }
}