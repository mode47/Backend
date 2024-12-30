// Importing required modules
const express = require('express');
const app = express();
app.use(express.json());
const ItemDb=require('../db/cartItemsDb');


const addItemController =async(req,res)=>{
    const { user_id, food_id, quantity, price }= req.body;
    console.log(" user_id, food_id, quantity, price ", user_id, food_id, quantity, price)
    try{
        await ItemDb.addItem({user_id, food_id, quantity, price} );
        res.status(201).json({message: 'Item added to cart'});
    }catch(error){
        res.status(500).json({error: 'Failed to add item to cart'});
    }
}
const getItemContrallerById =async(req,res)=>{
    try{
        console.log("req",req.body);
        const user_id=req.body;
        const items= await ItemDb.getItemById(user_id);
        console.log("items:",items);
        res.status(200).json(items);
    }catch(error){
        res.status(500).json({error: 'Failed to fetch item'});
    }
}
const deleteItemsControllerById= async(req, res) => 

    {
        try{
            const id=req.body;
            await ItemDb.deleteItemById(id);
            res.status(200).json({message: 'Items deleted successfully'});
        }catch(error){
            res.status(500).json({error: 'Failed to delete items'});
        }
    }

    const getAllItemsController =async(req,res)=>{
        try{
            const items= await ItemDb.getAllICartItems();
            res.status(200).json(items);
        }catch(error){
            res.status(500).json({error: 'Failed to fetch items'});
        }
    }

    

module.exports={addItemController,getItemContrallerById,deleteItemsControllerById,getAllItemsController};