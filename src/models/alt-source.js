const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database');

const AltSource = sequelize.define('AltSource', {
    src_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    acronym : {
        type: DataTypes.TEXT,
        primaryKey : true
    },
    source: {
        type: DataTypes.TEXT,
        primaryKey : true
    } , 
    field_of_research: {
        type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    rank : {
        type: DataTypes.TEXT
    }

}, {
    timestamps: false,
    tableName: 'alt_sources'
});

module.exports = AltSource;