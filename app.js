const request=require('request')
var key=""

const url="http://api.weatherstack.com/current?access_key="+key+"&query=New%20York"


request({url:url,json:true},(error,response)=>{

    console.log(response.body.current)
})