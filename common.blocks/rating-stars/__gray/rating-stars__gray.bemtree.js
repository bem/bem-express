block('rating-stars').elem('gray').content()(function() {
   var  ctx = this.ctx,
        data = this.data = ctx.data;
        // items = data.items;
        console.log(this.data);

    return [1,2,3,4,5].map(function(item) {
        return {
            elem: 'item',
            elemMods: { gray: true }
        };
    })
});
