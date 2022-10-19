const yargs = require("yargs")
const {sequelize} = require("./db/connection")
const {createMovie, readMovie} = require("./movie/movieFunction")

const app = async (yargsObject) => {
    try {
        await sequelize.sync()

        if (yargsObject.create){
            await createMovie({title: yargsObject.title, actor: yargsObject.actor})
            console.log(await readMovie())
        }
        else if (yargsObject.read){

        }
        else if (yargsObject.update){

        }
        else if (yargsObject.delete){

        }
        else {
            console.log("Incorrect Command")
        }

        await sequelize.close()
    } 
    catch (error) {
        console.log(error)
        await sequelize.close()
    }
}

app(yargs.argv)