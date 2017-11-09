block('icon').match(function() { return this.mods.glyph !== undefined; }).def()(function() {
    this.mods['has-glyph'] = 'yes';
    return applyNext();
});
