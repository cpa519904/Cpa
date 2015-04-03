
Ext.onReady(function(){
	

	Ext.create('Ext.container.Viewport', {
	    layout: 'border',
	    items: [{
	        region: 'north',
	        html: '<h1 class="x-panel-header">Page Title</h1>',
	        border: false,
	        margin: '0 0 5 0'
	    }, {
	        region: 'west',
	        collapsible: true,
	        title: 'Navigation',
	        width: 220,
	        collapsible: true,
	        split: true
	        // could use a TreePanel or AccordionLayout for navigational items
	    }, {
	        region: 'south',
	        title: 'South Panel',
//	        collapsible: true,
//	        html: 'Information goes here',
	        split: true,
	        height: 36,
	        minHeight: 36
	    }, {
	        region: 'center',
	        xtype: 'tabpanel', // TabPanel itself has no title
	        activeTab: 0,      // First tab active by default
            items: [
                    {
            	
                // LTR even when example is RTL so that the code can be read
                rtl: false,
                title: 'Bogus Tab',
                html: '../com/feed-viewer/feed-viewer.html'
            }, {
                title: 'Another Tab',
                html: 'Hello world 2',
                closable: true
            }, {
                title: 'Closable Tab',
                html: 'Hello world 3',
                closable: true
            }]
	    }]
	});
});