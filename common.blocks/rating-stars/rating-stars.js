modules.define('rating-stars', ['i-bem-dom', 'modal'], function(provide, bemDom, Modal) {

provide(bemDom.declBlock(this.name,
    {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    var modal = this.findChildBlock(Modal);

                    this._domEvents().on('click', function() {
                        modal.setMod('visible', true);
                    });
                }
            }
        }
    },
    {
        /* статические методы */
    })
);

});
