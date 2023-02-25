import express from "express";
import { getMovieByID, insertMovies, getMovies, deleteMovieById, updateMovieById } from "../services/movies.service.js";
const router = express.Router();
router.get("/:id", async function (request, response) {
    const { id } = request.params;
  
    const movie = await getMovieByID(id);
 
    movie ? response.send(movie) : response.status(404).send({ message: "movie not found" });
});

router.post("/", async function (request, response) {
    const data = request.body;
    const result = await insertMovies(data);
    response.send(result);
});



router.get("/", async function (request, response) {
 if (request.query.rating) {
        request.query.rating = + request.query.rating;
    }
 
    const movies = await getMovies(request);

    response.send(movies);
});

router.delete("/:id", async function (request, response) {
    const { id } = request.params;
   
    const result = await deleteMovieById(id);
  
    result.deletedCount > 0 ? response.send(result) : response.status(404).send({ message: "movie not found" });
});

router.put("/:id", async function (request, response) {
    const { id } = request.params;
    const data = request.body;
   
    const result = await updateMovieById(id, data);
    response.send(result);
});

export default router;