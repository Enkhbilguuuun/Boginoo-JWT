import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    username: {
        type:String,
        unique :[true, "ene neriig uur hun hereglej baina"],
        minlength:[2, "icheech iim nertei bhas"],
        required:[true],
    },
    context:{
        type:String,
        required:[true],
        maxlength:[50],
    },
    date:{
        type:Number,
    },
    pictures:{
        type:Array,
        required:[true],

    },
    profile:{
        type:String,
        required:[true]
    },
    comments:{
        type:String,
    },
    likes: 
        {type:Number,
        required:[true],
    },
    picContext: {type:String,
        maxlength:[50, "odoo bolishde"]
    }
});

// UserSchema.path("username").validate((firstName) => {
//     return !/[0-9]/.test(username);
//   }, "ner dotor too yvj bnaa");



const Post = mongoose.model("Post", PostSchema)

export default Post