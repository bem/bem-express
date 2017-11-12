block('feedback').elem('body').content()(function() {
    return [
        {
            block: 'radio-group',
            mods: {
                theme: 'islands',
                size: 'l',
                type: 'button'
            },
            mix: { block: this.block, elem: 'radio-group'},
            name: 'radio-islands',
            val: 2,
            options: [
                {
                    val: 1,
                    text: '1'
                },
                {
                    val: 2,
                    text: '2'
                },
                {
                    val: 3,
                    text: '3'
                },
                {
                    val: 4,
                    text: '4'
                },
                {
                    val: 5,
                    text: '5'
                }
            ]
        },
        {
            block: 'textarea',
            mods: {
                theme: 'islands',
                size: 'l',
                width: 'available'
            },
            mix: { block: this.block, elem: 'textarea'},
            placeholder: 'Ваш текст должен быть здесь'
        }
    ];
});
