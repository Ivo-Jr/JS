/* 
  Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transferir a função acima em um função que irá receber o nome do autor 
    e devolver os livros desse autor;
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico de Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
]

let categoryAmount = booksByCategory.length
let booksAmount;

/* console.log(`Total de categorias, ${categoryAmount}`)

booksByCategory.map(item => {
  console.log(`Total de livros em ${item.category}, ${item.books.length}`)
}) */

// let books = booksByCategory.map(item => console.log(item.books[0].author));

// 2:

// aparentemente para percorrer cada array, você utiliza um "map";
// map é similar ao "for (of)";

let numbersOfAuthors = [];
let authorBooks = [];

// function AuthorCount() {
//   booksByCategory.map(item => {
//     item.books.map(item => {
//       if (numbersOfAuthors.indexOf(item.author) === -1) {
//         numbersOfAuthors.push(item.author)
//       }
//     });
//   });
//   console.log(numbersOfAuthors.length);
// }

AuthorCount();

// function authorBook(author) {
//   booksByCategory.map(item => {
//     item.books.map(item => {
//       if(item.author === author) {
//         authorBooks.push(item.title)
//       }
//     })
//   })
// }

// authorBook('George S. Clason')
// console.log(authorBooks)


// console.log(books)
// console.log(books)

// books.map(item => console.log(item[1]));

// for(let category of booksByCategory) {
//   for(let book of category.books) {
//     console.log(book.author)
//   }
// }
 