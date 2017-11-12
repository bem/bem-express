/**
 * @module feedback
 */

modules.define(
    'feedback',
    ['i-bem-dom'],
    function(provide, bemDom) {

/**
 * @exports
 * @class feedback
 * @bem
 *
 * @bemmod visible Represents visible state
 */
provide(bemDom.declBlock(this.name, /** @lends feedback.prototype */{


}, /** @lends feedback */{
    lazyInit : true
}));

});
