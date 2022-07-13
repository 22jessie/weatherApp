const request=require('request')
var key="98775395509d3cc98300e343a4b35c1a"

const url="http://api.weatherstack.com/current?access_key="+key+"&query=New%20York"


request({url:url,json:true},(error,response)=>{

    console.log(response.body.current)
})