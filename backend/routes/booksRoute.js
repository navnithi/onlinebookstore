const router = require("express").Router();
const bookModel = require("../models/booksModel");

router.post("/add", async (req, res) => {
  try {
    const newBook = new bookModel(req.body);
    await newBook.save().then(() => {
      res.status(200).json({ message: "Book added successfully" });
    });
  } catch (error) {
    console.log(error);
  }
});

//GET BOOKS
router.get("/getBooks", async (req, res) => {
  let books;
  try {
    books = await bookModel.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
  }
});

//Get books by Id
router.get("/getBooks/:id", async (req, res) => {
  let book;
  const id = req.params.id;
  try {
    book = await bookModel.findById(id);
    res.status(200).json({ book });
  } catch (error) {
    console.log(error);
  }
});

//update
router.put("/updateBook/:id", async (req, res) => {
  const id = req.params.id;
  const { bookname, description, author, image, price } = req.body;

  try {
    const book = await bookModel.findByIdAndUpdate(id, {
      bookname,
      description,
      author,
      image,
      price,
    });
    await book.save().then(() => res.json({ message: "Data Updated" }));
  } catch (error) {
    console.log(error);
  }
});

//Delete book by id
router.delete("/deleteBook/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await bookModel
      .findByIdAndDelete(id)
      .then(() => res.status(201).json({ message: "deleted successfully" }));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

//get single book by id
/*router.get("/getBook/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const book = await bookModel.findById(id);
    res.json(book);
  } catch (error) {
    console.error("Failed to fetch book data:", error);
    res.status(500).json({ error: "Failed to fetch book data" });
  }
});*/

//updte book by id
/*router.put("/updateBook/:id", async (req, res) => {
  
  try {
    const { bookname, description, author, price } = req.body;
    const {image} = req.field;
    const filter = req.params.id;
    const updates = {
      $set: {
        bookname,
        description,
        author,
        price,
        image
      },
    };

    const options = { new: true };
    const result = await User.findOneAndUpdate(filter, updates, options);

    if (!result) {
      return req.status(401).json({message:"book not found"});
    }

    return req
      .status(200)
      .json( {message:"Book updated successfully"}, { result });
  } catch (error) {
    console.log(error);
  }
});*/

