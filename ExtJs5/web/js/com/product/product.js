Ext.application({
    name: 'PRODUCT',
    // All the paths for custom classes
    paths: {
        'Ext.ux': '../../../ext/examples/ux/'
    },

    // Define all the controllers that should initialize at boot up of your application
    controllers: [
        'Product'
    ],    
    autoCreateViewport: true
});