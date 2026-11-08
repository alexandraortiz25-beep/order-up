const tags = ["fresh coffee", "hot drinks", "made with love"];

const prices = [4.5, 9, 6.25, 3];

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
tagText.textContent = tagText.textContent + tags[i] + " · ";
}
let total = 0;

for (let i = 0; i < prices.length; i++) {
total = total + prices[i];
}

const totalText = document.querySelector("#total");
totalText.textContent = "$" + total;