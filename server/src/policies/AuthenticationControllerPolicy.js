// validate data requirements pass/fail
// making our own Express middleware
const Joi = require('@hapi/joi');

module.exports = {
    register(req, res, next) {
        const schema =  Joi.object ({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        });
        // eslint-disable-next-line no-unused-vars
        const {error, value} = schema.validate(req.body)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: "You must provide a valid email address"
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: "The password provided failed to match the following rules: 1) Only uppercase and lowercase letters and numbers. 2) Between 8 and 32 characters."
                    })
                    break
                default: 
                    res.status(400).send({
                        error: "Invalid registration information"
                    })
            }
                
        } else {
            next()
        }
        
    }
}