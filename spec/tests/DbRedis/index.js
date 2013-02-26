var assert= require('chai').assert

module.exports= function (DbRedis) { return function () {

    describe('DbRedis constructor', function () {
        it('should be instance of function', function () {
            assert.isFunction(
                DbRedis
            )
        })
    })

}}