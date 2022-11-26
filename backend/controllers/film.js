import{ getMovies, postMovie, getMoviesByTitle } from "../models/filmModels.js";

export const showMovies=(req, result)=>{
    getMovies((err,res)=>{
        if(err){
            result.send(err);
        }else{
            result.json(res);
        }
    });
}

export const showMoviesByTitle= (req, result)=>{
    getMoviesByTitle(req.params.title, (err,res)=>{
        if(err){
            result.send(err);
        }else{
            result.json(res);
        }
    });
}

export const addMovie=(req, result)=>{
    const data = req.body;
    postMovie(data, (err,res)=>{
        if(err){
            result.send(err);
        }else{
            result.json(res);
        }
    });
}