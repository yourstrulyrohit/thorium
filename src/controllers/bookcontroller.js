const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")
//3
const createBook= async function(req,res){
    let book=req.body
    let publisherId=book.publisher
    let authorId=book.author
    if(!authorId) return res.status(400).json({msg:"no author details with this id"})

   const author= await authorModel.findById(authorId)
  if(!author) return res.status(400).json({msg:"author is not present"})



if(!publisherId) return res.status(400).json({msg:" publisher details are not there with this id"})

  const publisher= await publisherModel.findById(publisherId)
if(!publisher) return res.status(400).json({msg:"publisher is not present"})

let bookCreated=await bookModel.create(book) 
return res.send({data:bookCreated})

}//4
const getBooksData= async function (req, res) {
    let Booksdata = await bookModel.find().populate('author publisher')
    res.send({data: Booksdata})

}
const updatebook = async function (req, res) {
  // 5. a)
  let hardCoverPublishers = await publisherModel.find({
    name: { $in: ["Penguin", "HarperCollins"] },
  });
  let publisherIds = hardCoverPublishers.map((p) => p._id); //publisherIds is an array of publisher _id values

  await bookModel.updateMany(
    { publisher: { $in: publisherIds } },
    { ishardCover: true }
  );

  // 5. b)
  let highRatedAuthors = await authorModel.find({ rating: { $gt: 3.5 } });
  let authorIds = highRatedAuthors.map((a) => a._id);

  await bookModel.updateMany(
    { author: { $in: authorIds } },
    { $inc: { price: 10 } }
  );

  let updatedbook = await bookModel.find();
  res.send({ updatedBookCollection: updatedbook });
};



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updatebook=updatebook
