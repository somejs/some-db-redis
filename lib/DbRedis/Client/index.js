var Db= require('some-db')
var Driver= require('redis')

/*/
 * Модель клиента к редису
 *
 * @constructor
 * @param {Object} options — параметры конструктора
 */
var Client= module.exports= Db.Client({
    ready: Db.Client.Property({
        value: false
    }),
    driver: Db.Client.Property()
})

/*/
 * Подключается к Редису
 */
Client.prototype.connect= function (done) {
    var client= this
    var driver= client.driver= Driver.createClient(
        client.options.port, client.options.hostname
    )
    var attempts= 1
    driver.on('connect', function () {
        console.log('событие CONNECT, клиент подключен')
    })
    driver.on('ready', function () {
        client.ready= true
        console.log('событие READY, клиент готов к обработке запросов')
        client.notify()
    })
    driver.on('end', function () {
        client.ready= false
        attempts= 6
        console.log('событие END, клиент отключен')
        client.notify()
    })
    driver.on('error', function (err) {
        console.log('событие ERROR, подключение не удалось:', err)
        if (0 < attempts) {
            attempts--
        } else {
            driver.closing= true
            console.log('все, база недоступна')
        }
    })
    done(null, client)
    return client
}