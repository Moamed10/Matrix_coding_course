const displayPosts = (req, res) => {
    const postsHtml = user.map(({ name, createdAt, message }) => {
        return `
            <p>${name } - ${createdAt}</p> 
            <p>${message}</p>
                        <br>

        `;
    }).join(''); 
    res.send(`
        <html>
            <body>
                ${postsHtml}
            </body>
        </html>
    `);
};


const mongoose=require('mongoose')
const moment =require('moment/moment')
const Schema=mongoose.Schema
const PostSchema=new Schema({
    posttitle:{
        type:String,
        minlength:['25','the sentense you enterd is too short '],
        required:true
    },
    postbody:{
        type:String,
        required:true
    },
    creat_at:{
        type:Date,
        default:Date.now,
        get:function(createdAt){
            return moment(createdAt).format('DD,MM, YYYY');
        }
    }
})
const Post=mongoose.model('post',PostSchema)
module.exports=Post

// minlenght form backend