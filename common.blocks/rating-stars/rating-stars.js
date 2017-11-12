modules.define('rating-stars', ['i-bem-dom', 'modal', 'feedback'], function(provide, bemDom, Modal, Feedback) {

provide(bemDom.declBlock(this.name,
    {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    var modal = this.findChildBlock(Modal),
                        feedback = this.findChildBlock(Feedback);

                    this._domEvents().on('click', function() {
                        modal.setMod('visible', true);
                    });

                    feedback._domEvents('cancel').on('click', function() {
                        modal.delMod('visible');
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
