// uses methods on model to return data to client
const {dataItem, userItem} = require("../Models/model.js")
// const bcrypt = require('bcryptjs');

exports.getData = async (req, res) => { // returns all messages from db using model func that actually gets it 
    try { 
        res.body = await dataItem.find();
        res.status = 200;
        res.send(res.body)
    } catch (error) { 
        console.log ("you fucked up getting")
    }
} 

exports.postData = async (req, res) => { 
    try { 
        console.log(req.body)
        const data = await new dataItem(req.body);
        data.save().then(() => console.log('posting'));
        res.status(201)
        res.send(`Posted successfully`)
    } catch (error) { 
        console.log ("you fucked up posting")
    }
}

/*
exports.logIn = async (req, res) => {
    try { 
        const { email, password } = req.body;
        const user = await userItem.findOne({ email, password});
        const passwordGood = bcrypt.compare(password, this.password)
        if (!user) {
            return res.status(401).send('Invalid email or password');
        }
        if (passwordGood) {
            res.send(true)  
        }
    } catch (error) { 
        console.log ("you fucked up signing in")
    }
}
*/

exports.getAllUsers = async (req, res) => { // returns all messages from db using model func that actually gets it 
    try { 
        res.body = await userItem.find();
        res.status = 200;
        res.send(res.body)
    } catch (error) { 
        console.log ("you fucked up getting users")
    }
} 

exports.signUp = async (req, res) => {
    try { 
        const user = await new userItem(req.body);
        user.save()
        res.status(201)
        res.send(`signed up successfully`)
    } catch (error) { 
        console.log ("you fucked up signing up")
    }
}

exports.deleteUser = async (req, res) => {  // deleting from start of stack not end 
    try {
        const { username } = req.params;
        await userItem.findOneAndDelete({ username });
        res.status(200).json({ message: "User deleted successfully."});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while deleting the user." });
    }
};