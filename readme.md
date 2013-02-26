# [some-db-redis](http://somejs.org/DbRedis) [![Build Status](https://secure.travis-ci.org/somejs/some-db-redis.png)](http://travis-ci.org/somejs/some-db-redis)

Объектная модель Редиса.

Реализует интерфейс маппера модели и расширяет его методами подключения и выполения запросов к Редису.
 
## Установка
```
npm install https://github.com/somejs/some-db-redis/archive/master.tar.gz
npm test
```
Зависит от **[some-db](https://github.com/somejs/some-db)** и **[some-model](https://github.com/somejs/some-model)**. Для тестирования необходимы **[mocha]()** и **[chai]()**.

 
## API и [документация](http://api.somejs.org/DbRedis)

 
# [Db (properties)]()
Конструктор модели базы данных. Возвращает конструктор потомка базы, расширенный переданными определениями схемы **properties**.

### Db.connect(options, callback)
Инстанцирует базу данных c параметрами **options** и подключается к ней. Возвращает ошибку и экземпляр базы в функцию **callback (err, db)**.

# [new Db (options)]()
Конструктор экземпляра модели базы.

###### Подключение к базе данных

### db.connect (options, callback)
Подключается к базе данных с параметрами **options**. Возвращает ошибку и экземпляр базы в функцию **callback (err, db)**.

### db.use (client)
Регистрирует клиента базы данных для использования.

###### Запросы к базе данных

### db.query (query, callback)
Выполняет запрос **query** к базе данных. Возвращает ошибку и результат выполнения запроса в функцию **callback (err, result)**.

### db.send (query, callback)
Отправляет запрос **query** к базе данных. Возвращает ошибку и результат выполнения запроса в функцию **callback (err, result)**.

###### Загрузка и сохранение моделей

### db.find (Model, prefix, keys, callback)
Конструирует модели с помощью конструктора **Model** для данных по ключам **keys**, к каждому из которых приставляется **prefix**. Возвращает ошибку и коллекцию моделей для найденных данных в функцию **callback (err, models)**.

### db.load (unloaded, model, callback)
Загружает незагруженные свойства **unloaded** модели **model**. Возвращает ошибку и загруженную модель в функцию **callback (err, model)**.

### db.save (unsaved, model, callback)
Сохраняет несохраненные свойства **unsaved** модели **model**. Возвращает ошибку и сохраненную модель в функцию **callback (err, model)**.

 
# [Db.Client (properties)]()
Конструктор клиента базы данных. Возвращает конструктор потомка, расширенный переданными определениями схемы **properties**.

### Db.Client.connect (options, callback)
Инстанцирует клиента базы данных c параметрами **options** и подключается к ней. Возвращает ошибку и клиента базы в функцию **callback (err, client)**.

# [new Db.Client (options)]()
Конструктор экземпляра клиента.

### client.connect (options, callback)
Подключается к базе данных с параметрами **options**. Возвращает ошибку и экземпляр базы в функцию  **callback (err, client)**.

### client.query (query, callback)
Выполняет запрос **query** к базе данных. Возвращает ошибку и результат выполнения запроса в функцию **callback (err, result)**.

### client.send (query, callback)
Отправляет запрос **query** к базе данных. Возвращает ошибку и результат выполнения запроса в функцию **callback (err, result)**.

### client.find (Model, prefix, keys, callback)
Конструирует модели с помощью конструктора **Model** для данных по ключам **keys**, к каждому из которых приставляется **prefix**. Возвращает ошибку и коллекцию моделей для найденных данных в функцию **callback (err, models)**.

### client.load (unloaded, model, callback)
Загружает незагруженные свойства **unloaded** модели **model**.Возвращает ошибку и загруженную модель в функцию **callback (err, model)**.

### client.save (unsaved, model, callback)
Сохраняет несохраненные свойства **unsaved** модели **model**. Возвращает ошибку и сохраненную модель в функцию **callback (err, model)**.

 
## Лицензия
MIT