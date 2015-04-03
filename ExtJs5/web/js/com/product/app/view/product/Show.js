Ext.define('PRODUCT.view.prodcut.Show', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.prodcutshow',

    requires: [
        'PRODUCT.view.prodcut.Grid'
    ],

    closable: false,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        Ext.apply(this, {
            items: [{
                xtype: 'articlegrid',
                flex: 1
            },{
                xtype: 'articlepreview',
                cls: 'articlepreview',
                height: 300
            }]
        });

        this.callParent(arguments);
    }
});
