const request = require('request')


const geocode=(city,callback)=>{
const geoUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/ " + city + " .json?access_token=pk.eyJ1IjoibW9oYW1lZGRkNzAiLCJhIjoiY2xrZTJrbHB3MWNhNzNwbXdnMWg2MXR6eSJ9.uIyYz77vLuSR2HSS0OAxHw"
    request({url:geoUrl , json:true },(error,response)=>{

if (error) {
    callback=("ERROR INTERNET OR OTHER",undefined)
}
else if (response.body.message) {
    callback("Not Authorized - Invalid Token",undefined)
}
else if (response.body.features.length == 0){
    callback("city not true",undefined)

}
else{
        
        callback(undefined,    
           {  latitude: response.body.features[0].center[0]   , longtitude: response.body.features[0].center[1]  } )
}

})}
module.exports = {
    x : geocode
}



