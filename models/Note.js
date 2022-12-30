// mongoose allows us to communicate with MongoDB easily
const mongoose = require('mongoose')

const autoIncrement = require('mongoose-sequence')(mongoose)

// defining database schema
const noteSchema = new mongoose.Schema(
    {
        // each field is an object - a dictionary
        user: {
            // data type specific to mongoose
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        title: {
            type: String,
            required: true
        },
        // can have multiple roles - that's why it's an array, denoted by the [] brackets
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            // any new note is uncompleted by default
            required: false
        }
    },
    {
        timestamps: true
    }
)
// sequential note IDs
noteSchema.plugin(autoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500
})

// exporting schema created above
module.exports = mongoose.model('Note', noteSchema)