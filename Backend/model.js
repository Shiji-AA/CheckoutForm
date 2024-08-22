import mongoose from 'mongoose'

const checkoutSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    street:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    zip:{
        type:String,
        required:true   
    },
    cardinformation:{
        type:String,
        required:true 
}

} , {
    timestamps: true 
}
)

const Checkout= mongoose.model("Checkout",checkoutSchema)
export default Checkout;