const {DataTypes} = require("sequelize")
const {sequelize} = require("../db/connection")

const Movie = sequelize.define("Movie", {
    title : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    actor : {
        type: DataTypes.STRING, 
        defaultValue: "Not Specified",
    },
    director: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull: false
    }


})

module.exports = Movie
