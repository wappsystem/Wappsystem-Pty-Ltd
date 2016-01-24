$vm.module_list={
    layout:                      ['--------','.../layout.html'],
    home:                        ['--------','.../modules/home.html'],
    business_management_nav:     ['--------','.../modules/business_management_nav.html'],
    client:                      ['20000368','.../modules/client.html'],
    transaction:                 ['20007172','.../modules/transaction.html'],
    predefined_transaction_item: ['20005380','.../modules/predefined_transaction_item.html'],
    upload_supporting_document:  ['20007516','.../modules/upload_supporting_document.html'],
    income_details:              ['--------','.../modules/income_details.html'],
    invoice:                     ['20004121','.../modules/invoice.html'],
    invoice_items:               ['20004122','.../modules/invoice_items.html'],
    invoice_patments:            ['20004123','.../modules/invoice_patments.html'],
    invoice_print:               ['--------','.../modules/invoice_print.html'],
}
//--------------------------------------------------------
for(key in $vm.module_list){
    $vm.module_list[key].push($vm.module_list[key][1]);
    $vm.module_list[key][1]=$vm.module_list[key][1].replace('...','__BASE__/'+$vm.repository)
    $vm.module_list[key][2]=$vm.module_list[key][2].replace('...','https://github.com/'+$vm.repository+'/blob/master')
}
//--------------------------------------------------------
var jsN=0;
var last=function(){
    $('head').append("<style> *{ margin:0; } html,body { height:100%;} </style>");
    setTimeout(function () {
        $.ajaxSetup({ cache: true });
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/jquery-ui.min.js',function(){last_last();});
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.min.js',function(){last_last();});
        $.getScript('https://sdk.amazonaws.com/js/aws-sdk-2.1.34.min.js',function(){last_last();});
        $.getScript('https://cbs.wappsystem.com/system/third/handsontable.full.min.js',function(){last_last();});
        $.getScript('https://cbs.wappsystem.com/dev/vm.js?v=20160108',function(){last_last();});
        $.getScript('https://www.google.com/jsapi',function(){
            google.load('visualization', '1', {'packages':['corechart'],callback:function(){last_last();} } );
        });
        $('head').append("<link rel='stylesheet' media='screen' href='https://cbs.wappsystem.com/system/third/handsontable.full.min.css'>");
        $('head').append("<link rel='stylesheet' href='https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/themes/redmond/jquery-ui.css'>");
    }, 300);

}
//--------------------------------------------------------
var last_last=function(){
    jsN++; if(jsN===6) $vm.load_demo();
}
//--------------------------------------------------------
