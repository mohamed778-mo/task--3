const request=require ('request')
const forcode=( latitude , longtitude , callback )=>{
const url="http://api.weatherapi.com/v1/current.json?key=c7c6ed7a2436450d887115803232207&q=" + latitude +","+longtitude

request({url, json:true }, (error,response)=>{

if (error) {
    callback=("ERROR URL",undefined)
    }
else if (response.body.error) {
    callback=("key not true",undefined)
}
else{
    callback=(undefined, {city: response.body.location.name }  )
}

} 
)}
module.exports={
    y : forcode
}