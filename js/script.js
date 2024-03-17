// Function to create a hamburger object with given options.
function createHamburger(options) {
  let hamburger = {
    bun: options.bun || "sesame seed bun",
    vegetables: options.vegetables || [],
    cheeses: options.cheeses || [],
    sauces: options.sauces || [],
    patty: options.patty || "beef",
    pattyCount: options.pattyCount || 1,
    extras: options.extras || [],
  };

  // Define the describe method for the hamburger object
  hamburger.describe = function () {
    let description;
    if (this.pattyCount == 1) {
      description = `This hamburger has a single ${this.patty} patty on a ${this.bun}`;
    } else if (this.pattyCount == 2) {
      description = `This hamburger has a double ${this.patty} patty on a ${this.bun}`;
    } else if (this.pattyCount == 3) {
      description = `This hamburger has a triple ${this.patty} patty on a ${this.bun}`;
    } else {
      description = `This hamburger has an unknown number of ${this.patty} patties on a ${this.bun}`;
    }
    if (this.vegetables.length > 0) {
      description += `, with ${this.vegetables.join(
        ", "
      )} as vegetable garnishes`;
    }

    if (this.cheeses.length > 0) {
      description += `, topped with ${this.cheeses.join(", ")} cheese`;
    }

    if (this.sauces.length > 0) {
      description += `, dressed with ${this.sauces.join(", ")} sauce`;
    }

    if (this.extras.length > 0) {
      description += `, and extras like ${this.extras.join(", ")}`;
    }

    return description + ".";
  };

  return hamburger;
}

// Function to build a hamburger object based on selected options
function buildHamburger() {
  // Get selected options from the form
  let bun = document.getElementById("bun").value;
  let vegetables = [];
  document
    .querySelectorAll('input[name="vegetable"]:checked')
    .forEach((item) => {
      vegetables.push(item.value);
    });
  let cheeses = [];
  document.querySelectorAll('input[name="cheese"]:checked').forEach((item) => {
    cheeses.push(item.value);
  });
  let sauces = [];
  document.querySelectorAll('input[name="sauce"]:checked').forEach((item) => {
    sauces.push(item.value);
  });
  let patty = document.getElementById("patty").value;
  let pattyCount = document.querySelector(
    'input[name="pattyCount"]:checked'
  ).value;
  let extras = [];
  document.querySelectorAll('input[name="extra"]:checked').forEach((item) => {
    extras.push(item.value);
  });

  // Create hamburger object
  let hamburger = createHamburger({
    bun: bun,
    vegetables: vegetables,
    cheeses: cheeses,
    sauces: sauces,
    patty: patty,
    pattyCount: pattyCount,
    extras: extras,
  });

  return hamburger.describe();
}

// Event listener added outside of the function
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector('button[type="button"]');

  button.addEventListener("click", function () {
    let burgerDescription = buildHamburger();
    document.getElementById("hamburgerDescription").innerText =
      burgerDescription;
  });
});
