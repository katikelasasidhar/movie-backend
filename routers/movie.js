import express from "express";
import { getmoviebyfilter, getmovies, getmoviebyid, createmovie, deletemovie, updatemovie } from "../helpers.js";
const router=express.Router();
import {client} from '../index.js'
router.
  route("/")
 .get(async (req,res)=>{
    
    const movie= await getmovies(client)
  
      res.send(movie)
  })
  .get(async (req,res)=>{
    //console.log(req.query)
    let filter=req.query;
    if(filter){
      filter.rating=parseInt(filter.rating)
    }
  
    
    const movie= await getmoviebyfilter(client, filter)
    
  
      res.send(movie)
  
  })
  .post(async (req,res)=>{
    const data=req.body;
   
    const movie= await createmovie(client, data);
  res.send(movie)
  
  });


  router.
     route("/:id")
  .get(async (req,res)=>{
         const {id}=req.params;
        
    const movie= await getmoviebyid(client, id)
    
    //console.log(movie)
      res.send(movie||{message:"no matching found"})
     // res.send(movies.find((movie)=> movie.id==req.params.id)||{message:"no matching found"})
  
  })
  
  .delete(async (req,res)=>{
    const {id}=req.params;
  
  const movie= await deletemovie(client, id)
  res.send("deleted successfully")
  })
  .put(async (req,res)=>{
    const {id}=req.params;
    
    
  const movie= await updatemovie(client, id, req);
  res.send(movie)
  })
  export const movierouter=router;