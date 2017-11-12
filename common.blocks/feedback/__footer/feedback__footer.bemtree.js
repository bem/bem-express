block('feedback').elem('footer').content()(function() {
    return [
        {
            block: 'button',
            mods: {
                theme: 'islands',
                size: 'l',
                view: 'plain'
            },
            mix: { block: this.block, elem: 'cancel' },
            text: 'Отмена'
        },
        {
            block: 'button',
            mods: {
                theme: 'islands',
                size: 'l',
                view: 'action'
            },
            text: 'Отправить'
        }
    ];
});
