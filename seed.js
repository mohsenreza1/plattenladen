import Product from "./models/product.js";
import {faker} from "@faker-js/faker"
import "./lib/connect_db.js"


const deleteProducts = async () => {
    return await Product.deleteMany();
  };
  const createProduct = async () => {
    const product = new Product({
      title: faker.lorem.sentences(1),
      artist: faker.name.fullName(),
    });
    await product.save();
  };
  const createProducts = async (count = 5) => {
    for (let i = 0; i < count; i++) {
      console.log("creating product: ", i + 1);
      await createProduct();
    }
  };
  try {
    if (!process.argv.includes("doNotDelete")) {
      console.log("deleting all Products...");
      await deleteProducts();
      console.log("done.");
    }
    console.log("creating new Products...");
    const count = process.argv[2] === "doNotDelete" ? undefined : process.argv[2];
    await createProducts(count);
    console.log("done.");
    console.log("seeding finished. happy coding!");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }