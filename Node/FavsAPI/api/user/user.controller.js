const {
  createUser,
  getAllUsers,
} = require('./user.service');

/**
 * ! Route: GET api/user/
 * ! Desc: Geta all users
 * ! Access: Private
 */

const handleGetAllUsers = async (req, res) => {
  try {
    const response = await getAllUsers();
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Error' });
  }
};

/**
 * ! Route: POST api/user/
 * ! Desc: Crete an user
 * ! Access: Public
 */

const handleCreateUser = async (req, res) => {
  const { body } = req;
  try {
    if (!body.name | !body.email | !body.password) {
      return res.status(400).json({ message: 'some missing values on request body' })
    }
    const result = /[0-9]/g.test(body.password)
    if (!result || body.password.length < 6){
      return res.status(400)
        .json({ message: 'password must contain a number and contain at least 6 characters' })
    }
    const response = await createUser(body);
    return res.status(201).json(response);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Error' });
  }
};

module.exports = {
  handleGetAllUsers,
  handleCreateUser,
};
