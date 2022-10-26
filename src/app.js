const yargs = require("yargs")
const {sequelize} = require("./db/connection")
const {createMovie, readMovie, updateMovie, deleteMovie} = require("./movie/movieFunction")
const {createUser, readUser, updateUser, deleteUser} = require("./users/userFuncs")
const {faveMovie, searchMovies, searchUsers} = require


const app = async (yargsObject) => {
    try {
        await sequelize.sync()

        if (yargsObject.createMovie){                                                                        //Create Func
            await createMovie({title: yargsObject.title, actor: yargsObject.actor})
            let output = {}
            let table = await readMovie()
            for (let movie of table){
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        }
        else if (yargsObject.readMovie){                                                                     //Read Func
            console.log(await readMovie({[yargsObject.key] : yargsObject.value}))
            let output = {}
            let table = await readMovie()
            for (let movie of table){
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        }
        else if (yargsObject.readAll){                                                                  //Read All Fallback Func
            console.log(await readMovie())
            let output = {}
            let table = await readMovie()
            for (let movie of table){
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                console.log(output)
            }
        }
        else if (yargsObject.updateMovie){                                                              //Update Func
            await updateMovie({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director, user: parseInt(yargsObject.user)}, {[yargsObject.key] : [yargsObject.value]})
            let output = {}
            let table = await readMovie()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                output.director = movie.director
                output.user = movie.user
                console.log(output)
            }}
        
        else if (yargsObject.deleteMovie){                                                              //Delete Func
            await deleteMovie({ [yargsObject.key] : [yargsObject.value] })
            let output = {}
            let table = await readMovie()
            for (let movie of table) {
                output.id = movie.id
                output.title = movie.title
                output.actor = movie.actor
                output.director = movie.director
                output.user = movie.user
                console.log(output)
        }}

        if (yargsObject.createUser){                                                                        //Create Func
            await createUser({name: yargsObject.name, memnum: yargsObject.memnum})
            let output = {}
            let table = await readUser()
            for (let user of table){
                output.id = user.id
                output.title = user.title
                output.memnum = user.memnum
                console.log(output)
            }
        }
        else if (yargsObject.readUser){                                                                     //Read Func
            let output = {}
            let table = await readUser({ [yargsObject.key] : yargsObject.value})
                output.id = table.id
                output.name = table.name
                output.memnum = table.memnum
                console.log(output)
            }
        
        else if (yargsObject.readAllUsers){                                                                  //Read All Fallback Func
            let output = {}
            let table = await readUser()
            for (let user of table) {
                output.id = user.id
                output.name = user.name
                output.memnum = user.memnum
                console.log(output)
            }
        }
        else if (yargsObject.updateUser){                                                                   //Update Func
            await updateUser({name: yargsObject.name, memnum: yargsObject.memnum}, { [yargsObject.key] : [yargsObject.value] })
            let output = {}
            let table = await readUser()
            for (let user of table) {
                output.id = user.id
                output.name = user.name
                output.memnum = user.memnum
                console.log(output)
            }}
        
        else if (yargsObject.delete){                                                                       //Delete Func
            await deleteUser({ [yargsObject.key] : [yargsObject.value] })
            let output = {}
            let table = await readUser()
            for (let user of table) {
                output.id = user.id
                output.name = user.name
                output.memnum = user.memnum
                console.log(output)
        }}
    
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