$vm.module_list={
    main_layout:                 ['--------','__BASE__/wappsystem/Wappsystem-Pty-Ltd/modules/main_layout.html','https://github.com/wappsystem/Wappsystem-Pty-Ltd/blob/master/modules/main_layout.html'],
    home:                        ['--------','__BASE__/wappsystem/Wappsystem-Pty-Ltd/modules/home.html','https://github.com/wappsystem/Wappsystem-Pty-Ltd/blob/master/modules/home.html'],
    business_management_nav:     ['--------','__BASE__/wappsystem/Wappsystem-Pty-Ltd/modules/business_management_nav.html','https://github.com/wappsystem/Wappsystem-Pty-Ltd/blob/master/modules/business_management_nav.html'],
    transaction:                 ['20007172','__BASE__/wappsystem/Wappsystem-Pty-Ltd/modules/transaction.html','https://github.com/wappsystem/Wappsystem-Pty-Ltd/blob/master/modules/transaction.html'],
    predefined_transaction_item: ['20005380','__BASE__/wappsystem/Wappsystem-Pty-Ltd/modules/predefined_transaction_item.html','https://github.com/wappsystem/Wappsystem-Pty-Ltd/blob/master/modules/predefined_transaction_item.html'],
    upload_supporting_document:  ['20007516','__BASE__/wappsystem/Wappsystem-Pty-Ltd/modules/upload_supporting_document.html','https://github.com/wappsystem/Wappsystem-Pty-Ltd/blob/master/modules/upload_supporting_document.html'],
    income_details:              ['--------','__BASE__/wappsystem/Wappsystem-Pty-Ltd/modules/income_details.html','https://github.com/wappsystem/Wappsystem-Pty-Ltd/blob/master/modules/income_details.html'],
}
//--------------------------------------------------------
var last=function(){
    $('head').append("<style> *{ margin:0; } html,body { height:100%;} </style>");
    setTimeout(function () {
        $.ajaxSetup({ cache: true });
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/jquery-ui.min.js');
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.min.js');
        $.getScript('https://sdk.amazonaws.com/js/aws-sdk-2.1.34.min.js');
        $.getScript('https://cbs.wappsystem.com/system/third/handsontable.full.min.js');
        $.getScript('https://cbs.wappsystem.com/dev/vm.js?v=20160108');
        $.getScript('https://www.google.com/jsapi',function(){
            google.load('visualization', '1', {'packages':['corechart'],callback:function(){} } );
        });
        $('head').append("<link rel='stylesheet' media='screen' href='https://cbs.wappsystem.com/system/third/handsontable.full.min.css'>");
        $('head').append("<link rel='stylesheet' href='https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/themes/redmond/jquery-ui.css'>");
    }, 100);

}
//--------------------------------------------------------
