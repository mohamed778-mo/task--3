
const request=require ('request')

const forcode=( latitude , longtitude , callback )=>{

const url="https://api.weatherapi.com/v1/current.json?key=c7c6ed7a2436450d887115803232207&q=" + latitude +"," + longtitude

request({url, json:true }, (error,response)=>{

if (error) {
    callback=("ERROR URL",undefined)
    }
else if (response.body.error) {
    callback=( response.body.error.message , undefined)
}
else{
    callback=(undefined,  "it" + response.body.current.condition.text +"and temp:"+response.body.current.temp_c  )
}

} 
)}
module.exports= forcode;