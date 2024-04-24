// import or require the mongoose
const mongoose = require("mongoose")

// to create & connect the database 
mongoose.connect("mongodb://localhost:27017/expressMongoose")
.then(() => console.log("connection successfully......"))
.catch((err) => console.log(err));

//define the document or structured the data
const playlistSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    ctype : String,
    videos:Number,
    active : Boolean,
    author : String,
    time : {
        type : Date ,
        default : Date.now
    } 
})

// create the collection
const Playlist = new mongoose.model("Playlist" , playlistSchema);

//create or isert data or documents
async function createDocument() {
try{
    const expressPlaylist = new Playlist({
        name : "express" ,
        ctype : "Back End" ,
        videos : 10 ,
        author : "atish" ,
        active : true 
    })

    const javascriptPlaylist = new Playlist({
        name : "javascript" ,
        ctype : "front End" ,
        videos : 30 ,
        author : "atish" ,
        active : true 
    })

    const mongodbPlaylist = new Playlist({
        name : "mongodb" ,
        ctype : "Back End" ,
        videos : 20 ,
        author : "atish" ,
        active : true 
    })

//InsertMany
    const result1 = await Playlist.insertMany([javascriptPlaylist,expressPlaylist,mongodbPlaylist]);
    console.log(result1)
    }catch(err){
        console.log(err);
        }
}

//createDocument();
async function findDocuments () { 
const result = await Playlist
//find
    .findOne({ctype : "Back End"})
    .select({name : 1 });
    //.sort({name :1});
    //.limit(1);
    //.countDocuments();
    console.log(result);
}

findDocuments();


// //updateOne
// /*const UpdateDocument = async(_id) =>{
// const result2 = await Playlist.updateOne({_id} , {
//     $set :{
//         name : "Javascript"
//     }
//   });
// }

// UpdateDocument("64c0e71337f0cfb1fbd419c1");
// */

const UpdateDocument = async() =>{
    const result2 = await Playlist.updateMany({ctype:'Back End'} , {
        $set :{
            videos : 30
        }
      });
    }
    
 //   UpdateDocument();
