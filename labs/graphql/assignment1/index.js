const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');
const crypto = require('crypto');

// In-memory data arrays
const authors = [];
const books = [];

// Schema Definition (TypeDefs)
const schema = buildSchema(`
  type Author {
    id: ID!
    name: String!
    nationality: String
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    genre: String!
    publicationYear: Int!
    author: Author
  }

  type Query {
    getAllBooks: [Book]
    getBookById(id: ID!): Book
    getAuthorWithBooks(id: ID!): Author
  }

  type Mutation {
    addAuthor(name: String!, nationality: String): Author
    addBook(title: String!, genre: String!, publicationYear: Int!, authorId: ID!): Book
  }
`);

// Resolvers
const root = {
  // Queries
  getAllBooks: () => {
    return books.map(book => {
      const author = authors.find(a => a.id === book.authorId);
      return { ...book, author };
    });
  },
  
  getBookById: ({ id }) => {
    const book = books.find(b => b.id === id);
    if (!book) return null;
    const author = authors.find(a => a.id === book.authorId);
    return { ...book, author };
  },
  
  getAuthorWithBooks: ({ id }) => {
    const author = authors.find(a => a.id === id);
    if (!author) return null;
    // Construct the books relation
    const authorBooks = books.filter(b => b.authorId === id).map(book => ({
      ...book,
      author
    }));
    return { ...author, books: authorBooks };
  },

  // Mutations
  addAuthor: ({ name, nationality }) => {
    const newAuthor = {
      id: crypto.randomUUID(),
      name,
      nationality
    };
    authors.push(newAuthor);
    return { ...newAuthor, books: [] };
  },
  
  addBook: ({ title, genre, publicationYear, authorId }) => {
    const authorExists = authors.find(a => a.id === authorId);
    if (!authorExists) throw new Error("Author not found");

    const newBook = {
      id: crypto.randomUUID(),
      title,
      genre,
      publicationYear,
      authorId
    };
    books.push(newBook);
    return { ...newBook, author: authorExists };
  }
};

const app = express();
app.use(cors());

// Configure the GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable GraphiQL UI
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
