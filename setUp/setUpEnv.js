const fs = require('fs').promises

function objetcToString(ob){
    let finalString = ''
    for (const element in ob) {
        finalString += `${element}="${ob[element]}"\n`
    }

    return finalString
}

async function setUpDotEnv(ob){
    try {
        const data = objetcToString(ob)
        await fs.writeFile('.env', data)
        console.log("File written")
    } catch (error) {
        console.log(error)
    } 
}

async function setUpEnv(){
    const envData = {
        REACT_APP_API_URL:'http://localhost:3001'
    }

    setUpDotEnv(envData)
    console.log("\t----ENVIRONMENT SETTED UP----")
}

setUpEnv()