class Product {
  name;
  price;

  constructor(name, price) {
    if (!name || !price) throw new Error("name and price must be filled");
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  total;
  products = [];

  cart(product, qty) {
    const isExist = this.products.find(
      (item) => item.product.name === product.name
    );
    if (isExist) {
      isExist.qty += qty;
    } else {
      this.products.push({ product, qty });
    }
  }

  calcTotal() {
    this.total = 0;
    this.products.forEach((item) => {
      this.total += item.product.price * item.qty;
    });
    return this.total;
  }
  checkout() {
    const total = this.calcTotal();
    console.log(`Total belanja anda adalah ${total.toLocaleString("id-ID")}`);
    this.products.forEach((item) => {
      console.log(
        `${item.product.name.padEnd(8, " ")} qty: ${item.qty
          .toLocaleString("id-ID")
          .toString()
          .padEnd(2, " ")} @ ${item.product.price.toLocaleString("id-ID")}`
      );
    });
  }
}
const baju = new Product("Baju", 100000);
const celana = new Product("Celana", 150000);
const tas = new Product("Tas", 200000);
const topi = new Product("Topi", 50000);
const sabuk = new Product("Sabuk", 75000);
const sepatu = new Product("Sepatu", 250000);

const transaction = new Transaction();
transaction.cart(baju, 1);
transaction.cart(baju, 1);
transaction.cart(celana, 2);
transaction.cart(tas, 1);
transaction.cart(topi, 1);
transaction.cart(sabuk, 1);
transaction.cart(sepatu, 1);

transaction.calcTotal();

transaction.checkout();
