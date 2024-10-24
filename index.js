const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const init = () => {
  const h2 = document.createElement("h2");
  h2.innerText = "Freelancer list";
  document.body.append(h2);
};
init();

function render() {
  const freelancerList = document.querySelector("table");
  const freelancerElements = freelancers.map((freelancer) => {
    const freelancerElement = document.createElement("tr");
    freelancerElement.innerHTML = `<td>${freelancer.name}</td><td>${freelancer.occupation}</td><td>${freelancer.price}</td>`;
    return freelancerElement;
  });
  freelancerList.replaceChildren(...freelancerElements);
  updateAveragePrice();
}


const addFreelancer = () => {
  const newFreelancer = {
    name: `New Freelancer ${freelancers.length + 1}`,
    price: Math.floor(Math.random() * 100),
    occupation: "unknown",
  };
  freelancers.push(newFreelancer);
  render();
};

setInterval(addFreelancer, 5000);

const calculateAveragePrice = () => {
  if (freelancers.length === 0) return 0;
  const totalPrice = freelancers.reduce((acc, freelancer) => acc + freelancer.price, 0); 
  return averagePrice = totalPrice / freelancers.length;
};
const updateAveragePrice = () => {
  const averagePrice = calculateAveragePrice();
  const averageDiv = document.getElementById("average-price");
  averageDiv.innerText = `Average Starting Price: $${averagePrice.toFixed(2)}`;
};

render();


// Explanation:
// Checking for Empty Array: The function first checks if the freelancers array is empty. If it is, it returns 0 to avoid division by zero.
// Using reduce: The reduce method sums up the prices of all freelancers. It starts with an initial value of 0 (the second argument to reduce).
// Calculating Average: The total price is divided by the number of freelancers to get the average.
// Returning the Result: The average price is returned, and you can use toFixed(2) to format the output to two decimal places.
