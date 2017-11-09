block('rating-stars').content()(function() {
    return [
        {
            elem: 'gray'
        },
        {
            elem: 'yellow'
        },
        {
            block: 'modal',
            mods: { autoclosable : true, theme : 'islands' },
            content: [
                {
                    block: 'feedback'
                }
            ]
        }
    ];
});
