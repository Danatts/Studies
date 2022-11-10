const {
  getFavById,
} = require('../favs/favs.service');

const {
createItem,
} = require('./item.service');

/**
 * ! Route: POST api/item/
 * ! Desc: Post a new item and add it on given favorites list id
 * ! Access: Private
 */
const handleCreateItem = async (req, res) => {
  const { body } = req;
  try {
    if (!body.title | !body.desc | !body.link | !body.favList) {
      return res.status(400).json({ message: 'some missing value on request body' })
    }
    const response = await createItem(body);
    const fav = await getFavById(body.favList);
    fav.items.push(response._id);
    await fav.save()
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Error' });
  }
}

module.exports = {
  handleCreateItem,
}
