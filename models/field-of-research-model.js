const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database');

const FieldOfResearch = sequelize.define('FieldOfResearch', {
    for_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    for_name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'fields_of_research'
});

FieldOfResearch.sync({alter: 'true'}).then(() => {console.log('FieldOfResearch table created')});

module.exports = FieldOfResearch;