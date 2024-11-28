// 1-davaleba

function isMultipleOfFive(number) {
  return number % 5 === 0 ? true : false;
}
console.log(isMultipleOfFive(5));
console.log(isMultipleOfFive(9));

// 2-davaleba

function calculateDiscountedPrice(price, discount) {
  const percentage = discount / 100;
  const discountedPrice = price * percentage;
  return price - discountedPrice;
}
console.log(calculateDiscountedPrice(1000, 10));

// 3-davaleba

function getCurrencySymbolFromCode(code) {
  const formatedCode = code.toUpperCase();
  switch (formatedCode) {
    case "GEL":
      return "₾";
    case "USD":
      return "$";
    case "EUR":
      return "€";

    default:
      return "Unknown currency code";
  }
}
console.log(getCurrencySymbolFromCode("Usd"));
console.log(getCurrencySymbolFromCode("eur"));
console.log(getCurrencySymbolFromCode("gel"));

// 4-davaleba

function convertToLowerCase(string) {
  const formatedString = string.toLowerCase();
  return formatedString;
}
console.log(convertToLowerCase("MY NAME IS JANE"));

// 5-davaleba

function filterOddNumbers(numbers) {
  const filteredArray = numbers.filter((number) => number % 2 === 1);
  return filteredArray;
}
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(Math.max(...numbersArr));
console.log(filterOddNumbers(numbersArr));

// 6-davaleba

function getCheapestProduct(products) {
  const cheapestProductFromProducts = products.sort(
    (a, b) => +a.price - +b.price
  )[0];
  return cheapestProductFromProducts;
}
console.log(getCheapestProduct);

// 7-davaleba

function findProductByTitle(products, productTitle) {
  const product = products.find((product) => product.title === productTitle);
  return product;
}
console.log(findProductByTitle);
