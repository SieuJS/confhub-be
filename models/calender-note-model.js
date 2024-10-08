const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database');

const CalenderNoteModel = sequelize.define('CalenderNote', {
    tid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    note: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    date_value: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false,
    tableName: 'calender_notes'
});

CalenderNoteModel.sync({alter: 'true'}).then(() => {
    console.log('CalenderNote table created');
});

module.exports = CalenderNoteModel;