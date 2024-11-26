import mongoose from "mongoose";

// const urlConnection =  'mongodb://localhost:27017/ricciaUsers'
const urlConnection =  'mongodb+srv://hugooxxxorielso:sadljhjkhsdajkhasjasd@cluster0.yg0le.mongodb.net/calendarRiccia'

export async function connectionDBMongoose(){
    try {
        await mongoose.connect(urlConnection);
        console.log('conected to db');
    } catch (error) {
        console.log(error);
    }
}
