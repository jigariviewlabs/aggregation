const ItemsModel = require('../models/itemdetail')
const UnivercityModel = require('../models/univercites')
const CourseModel = require('../models/courses')

const itemdetails = async (req,res) => {

    const { bookname, description, sku, ISBN_ASIN_UPC, quantity, cost_price, author} = req.body
    try {
        const doc = new ItemsModel({
            bookname: bookname,
            description: description,
            sku: sku,
            ISBN_ASIN_UPC: ISBN_ASIN_UPC,
            quantity: quantity,
            cost_price: cost_price,
            author: author,
            publication_date: new Date()

        })
        await doc.save();
        var saved_item = await ItemsModel.findOne({ sku: sku})
        console.log(saved_item);
        res.send({ "status": "succes", "message": "item_creation  succesfully", "details": saved_item });
        console.log("Success");
    } catch (error) {
        console.log(error);
        res.send({ "status": "fail", "message": "error" });
    }
}
const univercitydetails = async (req, res) => {

    const newUniversity = new UnivercityModel(req.body);

    // save the university to the database
    newUniversity.save()
        .then(() => {
            console.log('University added to database');
            res.status(201).json(newUniversity);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: err.message });
        })
}
const coursedetails = async (req, res) => {

    const newCourse = new CourseModel(req.body);

    // save the university to the database
    newCourse.save()
        .then(() => {
            console.log('Course added to database');
            res.status(201).json(newCourse);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: err.message });
        })
}
module.exports = { itemdetails, univercitydetails, coursedetails }