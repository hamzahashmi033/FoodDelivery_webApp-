import mongoose from "mongoose";

const schema = mongoose.Schema({
    shippingInfo :{
        hNo:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },       
        state:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
        pinCode:{
            type:Number,
            required:true
        },
        phoneNo:{
            type:Number,
            required:true
        }
    },
    orderItems:{
        cheeseBurger:{
           price:{
               type:Number,
               required:true       
            },
            quantity:{
                type:Number,
                required:true
            }
        },
        beefCheeseBurger:{
            price:{
                type:Number,
                required:true       
             },
             quantity:{
                 type:Number,
                 required:true
             }
         },
         chickenCheeseBurger:{
            price:{
                type:Number,
                required:true       
             },
             quantity:{
                 type:Number,
                 required:true
             }
         },
       
    },
    // user:{
    //     type:mongoose.Schema.ObjectId,
    //     ref:"User",
    //     required:true
    // },
    paymentMehtod:{
        type:String,
        enum:["COD","Online"],
        default:"COD"
    },
    paymentInfo:{
        id: {
            type: String,
            required: true,
            default:"31"
          },
          status: {
            type: String,
            required: true,
            default:"31"
          },
        },
    paidAt:Date,

    itemsPrice:{
        type:Number,
        required:true
    },
    taxPrice:{
        type:Number,
        required:true
    },
    shippingCharges:{
        type:Number,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    orderStatus:{
        type:String,
        enum:["Preparing","Shipped","Delivered"],
        default:"Preparing"
    },
    deliveredAt:Date,
    createdAt:{
        type:Date,
        default:Date.now
    }
});
export const Order = mongoose.model("Order",schema) 