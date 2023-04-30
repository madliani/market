const { faker } = require("@faker-js/faker");

const db = () => {
  const productsLength = 100;
  const { commerce, image, helpers } = faker;
  const { department, productDescription, productName, price } = commerce;
  const { uniqueArray } = helpers;
  const { fashion } = image;

  const products = uniqueArray(
    () => ({
      department: department(),
      description: productDescription(),
      image: fashion(),
      name: productName(),
      price: price(),
    }),
    productsLength
  );

  return { products };
};

module.exports = db();
