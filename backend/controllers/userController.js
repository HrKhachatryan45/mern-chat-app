const User = require('../models/userModel')

const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id.toString()

        console.log(req.cookies.jwt,'myToken')

        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select('-password');

        return  res.status(200).json(filteredUsers);

    }catch (error) {
        console.error('following error in here',error)
        return res.status(500).json({error: 'Something went wrong',error3:error});
    }

}

module.exports = {getUsersForSidebar};