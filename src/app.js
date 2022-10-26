const yargs = require("yargs")
const {sequelize} = require("./db/connection")
const {createMovie, readMovie} = require("./movie/movieFunction")

const app = async (yargsObject) => {
    try {
        await sequelize.sync()

        if (yargsObject.create){
            await createMovie({title: yargsObject.title, actor: yargsObject.actor})
            let output = {}
            let table = await readMovie()
            for (let movie of table){
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actorconsole.log(output)
            }
        }
        else if (yargsObject.read){
            console.log(await readMovie({[yargsObject.key] : yargsObject.value}))
            let output = {}
            let table = await readMovie()
            for (let movie of table){
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actorconsole.log(output)
            }
        }
        else if (yargsObject.readAll){
            console.log(await readMovie())
            let output = {}
            let table = await readMovie()
            for (let movie of table){
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actorconsole.log(output)
            }
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