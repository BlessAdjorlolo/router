const getUsers =  (req, res) =>{
    res.status(200).send("Welcome to my Server");
};

const createUser = (req, res) =>{
    res.status(201).send("Your data has been saved");
};

const updateUser = (req, res) =>{
    res.status(200).send("Your data has been updated");
};

const deleteUser = (req, res) =>{
    res.status(200).send("Your data has been updated");
};

    module.exports = {getUsers, createUser, updateUser, deleteUser};