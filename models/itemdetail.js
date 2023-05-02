const mongoose = require('mongoose');
// defining schema
const itemSchema = new mongoose.Schema({

    
    
    bookname: { type: String, required: false, trim: true },
    description: { type: String, required: false, trim: true },
    sku: { type: String, required: false, trim: true },
    ISBN_ASIN_UPC: { type: Number, required: false, trim: true },
    quantity: { type: Number, required: false, trim: true },
    cost_price: { type: Number, required: false, trim: true },
    author: { type: String, required: false, trim: true },
    publication_date: { type: Date, required: false, trim: true },
    

})
//model 
const ItemsModel = mongoose.model("Items", itemSchema)
module.exports = ItemsModel; 