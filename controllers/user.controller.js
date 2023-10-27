const userSchema = require("../models/user.model")
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId

const addUser = async (req, res) => {
    const {
        name,
        age,
        dob,
        email,
        address_line_1,
        address_line_2,
        city,
        district,
        state,
        active_user
    } = req.body;

    const requiredFields = [
        name,
        age,
        dob,
        email,
        address_line_1,
        address_line_2,
        city,
        district,
        state,
        active_user
    ];

    // if (requiredFields.some(field => !field)) {
    //     return res.status(400).json({ message: "All fields are required" });
    // }

    try {
        await userSchema.create({
            name,
            age,
            dob,
            email,
            address_line_1,
            address_line_2,
            city,
            district,
            state,
            active_user
        });

        res.status(201).json({ message: "User created successfully!" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }

};

const updateUser = async (req, res) => {

    const {
        name,
        age,
        dob,
        email,
        address_line_1,
        address_line_2,
        city,
        district,
        state,
        active_user
    } = req.body;

    let user;
    const { id } = req.params 
    const objectId = new ObjectId(id)
    try{
        user = await userSchema.findById(objectId)
    }catch(error){
        res.status(500).json({message: "error fetching user"})
    }
    
    if(!user){
        return res.status(404).json("User not found")
    }

    user.name = name || user.name
    user.age = age || user.age
    user.dob = dob || user.dob
    user.email = email || user.email
    user.address_line_1 = address_line_1 || user.address_line_1
    user.address_line_2 = address_line_2 || user.address_line_2
    user.city = city || user.city
    user.district = district || user.district
    user.state = state || user.state
    user.active_user = active_user || user.active_user

    try{
        await user.save()
        res.status(200).json({message: "user updated successfully"})
    }catch(error){
        res.status(400).json({ message: 'Error updating user' });
    }
}

const getUsers = async (req, res) => {
    try{
        const users = await userSchema.find()
        if(users.length == 0){
            return res.status(404).json({message: "data not found"})
        }
        res.status(200).json({messgae: "users fetched successfully", data: users})
    }catch(error){
        res.status(500).json({message: "error fetching users"})

    }
}

const getUser = async (req, res) => {
    const { id } = req.params
    const objectId = new ObjectId(id)
    try {
        const user = await userSchema.findById(objectId)
        console.log("users--->", id)
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json({message: "user fetched successfully", data: user})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server error'}); 
    }
}

const deleteUser = async(req, res) =>{
    const { id } = req.params
    const objectId = new ObjectId(id)
    try{
        const user = await userSchema.findByIdAndDelete(objectId)
        res.status(200).json({message: "user successfully deleted", data: user})
        
    }catch(err)
    {
        console.log(err)
        res.status(500).json("Server Error")
    }
}

module.exports = { addUser, updateUser, getUsers, getUser, deleteUser }