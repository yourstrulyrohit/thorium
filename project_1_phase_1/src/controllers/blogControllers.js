const blogModel = require("../models/blogModel")
const authorModel = require("../models/authorModel")






const createBlog = async function (req, res) {
    try {
        let data = req.body
        let authorId = data.authorId
        if (Object.keys(data).length == 0) {
            res.status(400).send({ status: false, msg: "Invalid Input" })
        }
        if (!authorId) {
            res.status(400).send({ status: false, msg: "Input AuthorId" })
        }
        let authorDetails = await authorModel.findById(authorId)
        if (!authorDetails) {
            res.status(404).send({ status: false, msg: "AuthorId Not Exist" })
        } else {
            let blogCreated = await blogModel.create(data)
            res.status(201).send({ status: true, data: blogCreated })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }

}

const getBlogs = async function (req, res) {
    try {
        let collection = await blogModel.find({ isPublished: false, isDeleted: false })
        // res.status(200).send({ status: true, msg: collection })

        if (!collection) {
            res.status(404).send({ status: false, msg: "Blogs are not found" })
        }
        else {
            let data = req.query;
            let getByQuery = await blogModel.find(data)
            if (getByQuery <= 0) {
                res.status(404).send({ status: false, msg: 'Data no found' })
            }
            else {
                res.status(201).send({ status: true, msg: getByQuery })
            }
        }
    }

    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

const updateBlog = async function (req, res) {
    try {
        let blogId = req.params.blogId;
        let findBlogId = await blogModel.findById(blogId)
        if (!findBlogId) {
            res.status(404).send({ status: false, msg: 'blog not found' })
        }
        else {
            let data = req.body;
            let savedata = await blogModel.findOneAndUpdate({ _id: blogId }, { $set: data }, { new: true })
            // console.log(savedata)
            savedata.isPublished = true
            savedata.publishedAt = Date()
            savedata.save()
            res.status(201).send({ status: true, msg: savedata })
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}




const deleteBlog = async function (req, res) {
    try {
        let BlogId = req.params.BlogId
        if (Object.keys(BlogId).length == 0) {
            res.status(400).send({ status: false, msg: "BlogsId Required" })
        }
        let blogDetails = await blogModel.find({ _id: BlogId }, { isDeleted: false })
        if (!blogDetails) {
            res.status(404).send({ status: false, msg: "Blogs Not Found" })
        } else {

            let deleteData = await blogModel.findOneAndUpdate({ _id: BlogId }, { isDeleted: true }, { new: true })
            deleteData.deletedAt = Date()
            deleteData.save()
            res.status(201).send({ status: true, data: deleteData })

        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }


}


const deleteByAddress = async function (req, res) {
    try {
        let authorId = req.query.authorId
        let category = req.query.category
        if (!authorId) {
            res.status(400).send({ status: false, msg: "AuthorId Required" })
        }
        if (!category) {
            res.status(400).send({ status: false, msg: "Category Required" })
        }
        let authorDetails = await authorModel.find({ _id: authorId })
        if (!authorDetails) {
            res.status(404).send({ status: false, msg: "AuthorId Not Exist" })
        } else {
            let updateDetails = await blogModel.updateMany({ authorId: authorId, category: category }, { $set: { isDeleted: true } })
            updateDetails.deletedAt = Date()
            res.status(201).send({ status: true, data: updateDetails })

        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }
}






module.exports.createBlog = createBlog;
module.exports.getBlogs = getBlogs;
module.exports.updateBlog = updateBlog;
module.exports.deleteBlog = deleteBlog;
module.exports.deleteByAddress = deleteByAddress;