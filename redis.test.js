const Redis = require('redis');
let client = Redis.createClient({
    host: '192.168.136.131',
    port: 6379,
    password: 'my_redis',
    db: 0
});

client.on("error", function (err) {
    console.log("Error " + err);
});

client.on("connect", function(){
    // start server();
    client.set("name_key", "hello world", function(err, reply){
        console.log(reply.toString());
    });
    client.get("name_key", function(err, reply){
        console.log(reply.toString());
    });
})

client.set("string key", "string val", Redis.print);