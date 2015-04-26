Ext.define('GlobalMaxApp.view.viewLogin' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.viewlogin',
    xtype: 'login',
    id: 'idViewLogin',
    resizable : false,
    bodyPadding: 10,
    title: 'GlobalMax Login',
    closable: false,
    autoShow: true,
    modal:true,
    items: {
        id: 'idViewLoginForm',
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Usuario',
            allowBlank: false,
            value : 'admin'
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Contraseña',
            allowBlank: false,
            text: 'admin',
            value : 'admin'
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Ingrese Usuario y Contraseña.'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            action : 'getLogin'
        }]
    }
});

