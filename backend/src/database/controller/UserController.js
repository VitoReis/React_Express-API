    const User = require('../scheemas/User')

    const create =  async function(req, res) {
        const { name, email, phone, address } = req.body
        try {

            const user = await User.create({
                name: name,
                email: email,
                phone: phone,
                address: address
            })

            return res.status(200).json({title: "Success", message: "User created."})

        } catch (error) {

            return res.status(500).send({
                error: "Registration failed",
                message: error
            })

        }
    }

    const find = async function(req, res) {
        const { name } = req.body

        try {
            const user = await User.findOne({ name: name })
            if(!user){
                return res.status(404).json({
                    error: "Ooops",
                    message: "User not found."
                })
            }

            return res.status(200).json(user)

        } catch (error) {
            return res.status(500).send({
                error: "Reading failed",
                message: error
            })
        }
    }

    const read = async function(req, res) {
        try {
            const users = await User.find({})
            return res.status(200).json(users)

        } catch (error) {
            return res.status(500).send({
                error: "Reading failed",
                message: error
            })
        }
    }

    const update = async function(req, res) {
        const { name, email, phone, address } = req.body

        try {

            const user = await User.findOneAndUpdate({ name: name }, { email: email, phone: phone, address: address })
            if(!user){
                return res.status(404).json({
                    error: "Ooops",
                    message: "User not found!"
                })
            }

            return res.status(200).json({title: "Success", message: "Username updated."})

        } catch (error) {

            return res.status(500).send({
                error: "Update failed",
                message: error
            })

        }
    }

    const del = async function(req, res) {
        const { name } = req.body

        try {
            const user = await User.findOneAndDelete({ name: name })

            if(!user){
                return res.status(404).json({
                    error: "Ooops",
                    message: "User doesn't exists."
                })
            }

            return res.status(200).json({title: "Success", message: "User deleted."})

        } catch (error) {
            return res.status(500).send({
                error: "Deletion failed",
                message: error
            })
        }
    }

module.exports = {
    create,
    read,
    find,
    update,
    del
}