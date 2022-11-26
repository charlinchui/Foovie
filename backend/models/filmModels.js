import db from '../config/database.js';

//Recibir datos de las peliculas
export const getMovies = (result) =>{
    db.query('SELECT * FROM pelicula', (err, res) =>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
}

//Buscar pelicula por titulo
export const getMoviesByTitle = (titulo, result)=>{
    db.query("SELECT * FROM pelicula WHERE titulo = ?", [titulo], (err, res)=>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, res[0]);
        }
    });
}

//Añadir pelicula
export const postMovie=(data, result)=>{
    db.query("INSERT INTO movies SET?",[data], (err,res)=>{
        if(err){
            console.log(err);
            result(err, null);
        }else{
            result(null, res[0]);
        }
    });
}