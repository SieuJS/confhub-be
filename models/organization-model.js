const { DataTypes } = require('sequelize');
const sequelize = require('./../config/database');

const Organization = sequelize.define('Organization', {
    org_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        defaultValue: "location 1"
    },
    type: {
        type: DataTypes.TEXT,
        // validate: {
        //     isIn: {
        //         args: [['online', 'offline', 'hybrid']],
        //         msg: 'Error: invalid value'
        //     }
        // }
    },
    location: {
        type: DataTypes.TEXT
    },
    start_date: {
        type: DataTypes.DATEONLY
    },
    end_date: {
        type: DataTypes.DATEONLY
    },
    status: {
        type: DataTypes.TEXT,
        defaultValue: 'new'
    }
}, {
    timestamps: false,
    tableName: 'organizations'
});

Organization.sync({alter: 'true'}).then(() => {console.log('Organization table created')});

module.exports = Organization;