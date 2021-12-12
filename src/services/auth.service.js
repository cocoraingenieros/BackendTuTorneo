const jwt = require('jsonwebtoken')
const User = require('../models/user') 
const bcrypt = require('bcrypt')
const msg = require('../helpers/messages')

const authService = {
    signToken: async (id)=>{
        return jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24 * 365
        })
    },
    login: async function(data){
        try {
            const {email, password} = data
            console.log(email, password)
            const userExists = await User.findOne({email:email}, 'name email password')
            console.log(userExists)
            if(await bcrypt.compare(password, userExists.password).then(res=>res)){
                const token = await this.signToken(userExists.id)
                return {
                    code: 200,
                    token
                }
            }else{
                return msg.authFailed
            }
        } catch (error) {
            return error            
        }
    },
    register: async function(userData){
        console.log(userData.password)
        try {
            const hash = await bcrypt.hash(userData.password, 10).then(res => res)
            userData.password = hash
            await userData.save()
            const token = await this.signToken(userData._id)
            return {
                userData,
                code: 200,
                
                token
            }
        } catch (error) {
            return error
        }
    }
}
module.exports = authService