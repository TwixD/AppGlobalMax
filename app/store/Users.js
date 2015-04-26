Ext.define('GlobalMaxApp.store.Users', {
    extend: 'Ext.data.Store',
    model: 'GlobalMaxApp.model.User',
    alias : 'widget.storeusers',
    id: 'idUsers',
    autoLoad: true,
  
   
    config: {
   

proxy: {
    type: 'ajax',
    url: 'api/myPHPfile.php',
reader: {
    type: 'json',
    rootProperty: 'message'
}
}
}
});
    /*
    proxy: {
        type: 'ajax',
        api: {
            // These are static JSON files that never change. In a real system
            // they will normally point to a page that gets processed on the server.
            read: 'http://localhost/SiSapp/app/view/index.php?route=service_javaalumnos',
          //  update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'message',
           // successProperty: 'success'
        }
    }
});
*/