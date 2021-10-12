const { DataTypes }= require("sequelize")

module.exports=(sequelize)=>{

    sequelize.define("task", {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            unique:true,
            autoIncrement:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
        }
    });
}