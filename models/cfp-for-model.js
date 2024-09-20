const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CfpFor = sequelize.define('CfpFor', {
    tid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }
}, {
    timestamps: false,
    tableName: 'cfp_fors'
})

CfpFor.sync({alter: 'true'}).then(() => {console.log('CfpFor table created')});

module.exports = CfpFor;