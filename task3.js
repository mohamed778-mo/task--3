const geocode = require("./geo/geocode")
const forcode = require("./geo/forcode")
const city=(process.argv[2])

geocode ( city,( error , data ) => {
    console.log("ERROR:" , error)
    console.log("DATA:" , data)

    if (data) {
        forcode ( data.latitude , data.longtitude , (error,data)=>{
        console.log("ERROR:",error)
        console.log("DATA:",data )
        
    })
    } else{
        console.log("error data")
    }
    
    })

    
































