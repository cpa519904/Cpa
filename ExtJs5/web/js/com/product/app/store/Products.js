Ext.define('PRODUCT.store.Products', {
    extend: 'Ext.data.Store',

    model: 'PRODUCT.model.Product',

    data: [
        {name: 'Sencha Blog',   url: 'http://feeds.feedburner.com/extblog'},
        {name: 'Sencha Forums', url: 'http://sencha.com/forum/external.php?type=RSS2'},
        {name: 'Ajaxian',       url: 'http://feeds.feedburner.com/ajaxian'}
    ]
});
