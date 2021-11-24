

async function getmoviebyfilter(client, filter) {
  return await client
    .db("b27rwd")
    .collection("movies")
    .find(filter)
    .toArray();
}


async function getmovies(client) {
  return await client
    .db("b27rwd")
    .collection("movies")
    .find({})
    .toArray();
}


async function getmoviebyid(client, id) {
  return await client
    .db("b27rwd")
    .collection("movies")
    .findOne({ id: id });
}


async function createmovie(client, data) {
  return await client
    .db("b27rwd")
    .collection("movies")
    .insertMany(data)
    .toArray();
}


async function deletemovie(client, id) {
  return await client
    .db("b27rwd")
    .collection("movies")
    .deleteOne({ id: id });
}

async function updatemovie(client, id, req) {
  return await client
    .db("b27rwd")
    .collection("movies")
    .updateOne({ id: id }, { $set: req.body });
}
export {getmoviebyfilter,
        getmovies,
        getmoviebyid,
        createmovie,
        deletemovie,
        updatemovie       



 


}
