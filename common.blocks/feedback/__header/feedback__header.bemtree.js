block('feedback').elem('header').content()(function() {
   var  ctx = this.ctx,
        data = this.data = ctx.data;

    return [
        {
            block: 'heading',
            mods: { level: 3 },
            content: 'Отправить отзыв'

        }

    ];
});
