export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
  console.log(req.params);
  return res.send(`Watch video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Uploads");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
