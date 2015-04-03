Ext.define('PRODUCT.model.Product', {
    extend: 'Ext.data.Model',
    
    proxy: {
        type: 'memory'
    },    
    fields: [
        {name: 'url',  type: 'string'},
        {name: 'name', type: 'string'}
    ]
});