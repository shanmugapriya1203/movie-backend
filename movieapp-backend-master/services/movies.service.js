import { client } from "../index.js";
import { ObjectId } from "mongodb";




export async function getMovieByID(id) {
    return await client.db("moviesapp").collection("movies").findOne({ _id: ObjectId(id) });
}
export async function insertMovies(data) {
    return await client.db("moviesapp").collection("movies").insertOne(data);
}
export async function getMovies(request) {
    return await client.db("moviesapp").collection("movies").find(request.query).toArray();
}
export async function updateMovieById(id, data) {
    return await client.db("moviesapp").collection("movies").updateOne({ _id: ObjectId(id) }, { $set: data });
}
export async function deleteMovieById(id) {
    return await client.db("moviesapp").collection("movies").deleteOne({ _id: ObjectId(id) });
}


