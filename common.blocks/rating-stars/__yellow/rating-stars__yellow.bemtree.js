block('rating-stars').elem('yellow').content()(function() {
   var  ctx = this.ctx,
        data = this.data = ctx.data;
        // items = data.items;
        console.log(this.data);

    return [1,2,3,4,5].map(function(item) {
        return {
            block: 'icon',
            mods: {
                glyph: 'type-star'
            }
        };
    })
});
