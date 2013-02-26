var Redis= require('../../lib/DbRedis')
var Url= require('url')

//console.log(Redis)

var redis= new Redis({
    options: Url.parse('redis://localhost:6379/1/prefix')
})

redis.connect(function (err, redis) {
    console.log('подключен', arguments)
})