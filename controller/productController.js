import  Product from "../models/product.js"

export const getAll = (req, res)=>{
    console.log(req.query)
    res.status(200).json("")
}

export const get = (req,res)=>{
        const suchTern = req.query.suchTern || ""
        Product.find({$or:[
            {
                title:{
                    $regex: suchTern
                }
            },
            {
                artist:{
                    $regex: suchTern
                }
            }
        ]},(error,product)=>{
            if(error)
            throw error;
            res.status(200).send(product)
            
        })
    }
