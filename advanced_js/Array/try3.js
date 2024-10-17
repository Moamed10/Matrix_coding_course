const arr = [{ id: 5, name: "Sam" }, { id: 7, name: "Pouyan" }]

console.log(arr.findIndex(x => x.id === 5) )              // returns 0
arr.findIndex(x => x.name === "Pouyan")      // returns 1
arr.findIndex(x => x === 3)                  // returns -1
console.log(arr.findIndex(x => x.id === 17))              // returns -1


// const arr = [{ id: 5, name: "Sam" }, { id: 7, name: "Pouyan" }]
const words = ["Beachball", "Rodeo", "Angel",
    "Aardvark", "Xylophone", "November", "Chocolate",
    "Papaya", "Uniform", "Joker", "Clover", "Bali"];
    
const longWords = words.reduce((a, w) => w.length>6 ? a+" "+w : a, "").trim();
// longWords: "Beachball Aardvark Xylophone November Chocolate Uniform