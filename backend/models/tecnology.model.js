const mongose = require('mongoose')
const { Schema } = mongose


const TecnologySchema = new Schema({
    name: {type: String, maxlength: 50 },
    description: {type: String},
    logo:{type: String},
    tags: [{type: String}]
    
},  {timestamps: {createdAt: true, updatedAt:true}
})



module.exports = mongose.model("Tecnology", TecnologySchema)