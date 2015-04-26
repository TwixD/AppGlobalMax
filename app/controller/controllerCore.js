Ext.define('GlobalMaxApp.controller.controllerCore', {
    extend: 'Ext.app.Controller',
    requires: [
    'GlobalMaxApp.view.viewCalculadora'
    ],
     init: function(application) {
        this.control({
             "button[action=getLogin]":{
                 click: this.getValidarUsuario
             },            
             "treecolumn[action=getActionMenuClicked]": {
                 click: this.getTreeMenu
             },
             "tabpanel[action=activarTab2]": {
                beforetabchange: this.activeTabPanel
             },
             "button[action=openwindow]": {
                click: this.getWindowReporte
            },
         });
     },
    
    getValidarUsuario: function(){
        var formulario = Ext.getCmp('idViewLoginForm');
        var mainView = Ext.getCmp("idViewport");
        var users = Ext.getStore("Lista");
        var responseForm = formulario.getForm().getValues();
        users.load({
                params: {
                    route: 'validate_user',
                    user: responseForm.username,
                    password: responseForm.password
                        },                
                    callback: function(records, operation, success) {
                    var objResponse = records[0].data.message[0];
                    
                       if (success === true) {
                            mainView.getLayout().setActiveItem(1);
                       }else{
                            Ext.Msg.show({
                            title:objResponse.recommend,
                            message: objResponse.msg,
                            buttons: Ext.Msg.YES,
                            icon: Ext.Msg.ERROR
                         });
                        }
                    }
        });
},
    activeTabPanel: function () {
        console.log("Activar");
    },

    getTreeMenu: function (a, b, c, d, e, store) {
        var idComponente = store.data.id_programa;
        var mainView = Ext.getCmp("idReporte");
        var calc  = Ext.getCmp("idViewcalculadora");
        if (idComponente == 10) {
            mainView.add(calc);
            mainView.doLayout();
           // mainView.getLayout().setActiveItem(10);
        }
},

showPanel: function(view, node, record, item, index, e ) { 
    if(node.isLeaf) {
        var grid= Ext.ComponentQuery.query('flyergrid[itemId=record.data.id]');
        if(!grid) {
            var panel = this.getPanel();
            Ext.suspendLayouts();
            panel.removeAll();
            panel.add({xtype:'flyergrid',itemId:record.data.id});
            Ext.resumeLayouts(true);
        }
    }
},














    refreshGrid: function () {

        var mainView = Ext.getCmp("idViewport");

        var formulario = Ext.getCmp('idViewLogin');
        var responseForm = formulario.getForm().getValues();
        mainView.getLayout().setActiveItem(1);//BusiProfileView

    },
    getWindowReporte: function () {

        var mainView = Ext.getCmp("idWindowReportes");
        mainView.isVisible();
        /*  Ext.create('Ext.window.Window', {
         title: 'Hello',
         height: 200,
         width: 400,
         layout: 'fit',
         items: {  // Let's put an empty grid in just to illustrate fit layout
         xtype: 'grid',
         border: false,
         columns: [{header: 'World'}],                 // One header just for show. There's no data,
         store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
         }
         }).show();*/
    }



});
