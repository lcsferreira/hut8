const books = [
  {
    cod: "8568014003",
    nome: "mais esperto que o diabo",
    autor: "Napoleon Hill",
    valor: 24.6,
    quantidadeVendido: 17675,
  },
  {
    cod: "8550801488",
    nome: "pai rico, pai pobre",
    autor: "Robert T. Kiyosaki",
    valor: 42.71,
    quantidadeVendido: 8992,
  },
  {
    cod: "8547001085",
    nome: "antifragil",
    autor: "Nassim Nicholas Taleb",
    valor: 70.99,
    quantidadeVendido: 1700,
  },
  {
    cod: "8595080801",
    nome: "o investidor inteligente",
    autor: "Benjamin Graham",
    valor: 36.3,
    quantidadeVendido: 8445,
  },
  {
    cod: "8539004119",
    nome: "o poder do hábito",
    autor: "Charles Duhigg",
    valor: 48.9,
    quantidadeVendido: 14581,
  },
  {
    cod: "8543102146",
    nome: "essencialismo",
    autor: "Greg Mckeown",
    valor: 36.43,
    quantidadeVendido: 9730,
  },
  {
    cod: "9788539003839",
    nome: "rápido e devagar",
    autor: "Daniel Kahneman",
    valor: 50.93,
    quantidadeVendido: 5703,
  },
  {
    cod: "8551003429",
    nome: "princípios",
    autor: "Ray Dalio",
    valor: 89.9,
    quantidadeVendido: 3707,
  },
  {
    cod: "855717358X",
    nome: "gestão de alta performance",
    autor: "Andrew S. Grove",
    valor: 34.94,
    quantidadeVendido: 442,
  },
  {
    cod: "8550805246",
    nome: "empresas feitas para vencer",
    autor: "Jim Collins",
    valor: 44.2,
    quantidadeVendido: 824,
  },
  {
    cod: "855080455X",
    nome: "avalie o que importa",
    autor: "John Doerr",
    valor: 40.9,
    quantidadeVendido: 797,
  },
];

const bestSellerAuthor = () => {
  return books
    .sort((a, b) => a.quantidadeVendido - b.quantidadeVendido)
    .reverse()[0].autor;
};

const getUnderPrice = (price) => {
  return books.filter((book) => book.valor <= price);
};

const getAbovePrice = (price) => {
  return books.filter((book) => book.valor >= price);
};

const searchByBookName = (bookName) => {
  return books.find((book) => book.name === bookName);
};

const searchByAuthor = (author) => {
  return books.find((book) => book.autor === author);
};

const searchByCode = (code) => {
  return books.find((book) => book.cod === code);
};

const getBooks = () => {
  return books;
};

const topBestSellers = (top) => {
  return books
    .sort((a, b) => a.quantidadeVendido - b.quantidadeVendido)
    .reverse()
    .slice(0, top);
};

const increaseCost = (percentage) => {
  return books.map((book) => {
    return {
      ...book,
      valor: (book.valor = (
        book.valor +
        book.valor * (percentage / 100)
      ).toFixed(2)),
    };
  });
};

// console.log(increaseCost(50));
// console.log(bestSellerAuthor());
// console.log(getUnderPrice(40));
// console.log(topBestSellers(5));
