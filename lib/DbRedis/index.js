var Db= require('some-db')



/*/
 * Модель Редиса
 *
 * Наследует интерфейс базы данных
 *
 * @constructor
 * @param {Object} options — параметры конструктора
 */
var DbRedis= module.exports= Db({
    ready: Db.Property({
        value: false
    })
})

/*/
 * Клиент к Редису (реализует интерфейс Db.Client)
 *
 * @exports Client as DbRedis.Client
 */
DbRedis.Client= require('./Client')



/*/
 * Подключается к Редису
 */
DbRedis.prototype.connect= function (done) {
    client= new DbRedis.Client({
        options: this.options
    })
    var db= this
    db.use(
        client.attach(db.observer)
    )
    client.connect(function (err, client) {
        done(err, db)
    })
    return db
}