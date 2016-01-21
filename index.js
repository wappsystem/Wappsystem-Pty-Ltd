//--------------------------------------------------------
$vm.module_list={
    main_layout:                 ['--------','.../main_layout.html'],
    home:                        ['--------','.../home.html'],
    business_management_nav:     ['--------','.../business_management_nav.html'],
    transaction:                 ['20007172','.../transaction.html'],
    predefined_transaction_item: ['20005380','.../predefined_transaction_item.html'],
    upload_supporting_document:  ['20007516','.../upload_supporting_document.html'],
    income_details:              ['--------','.../income_details.html'],
}
//--------------------------------------------------------
for(key in $vm.module_list){
    var path=$vm.module_list[key][1];$vm.module_list[key].push(path);
    $vm.module_list[key][1]=path.replace('...','__BASE__/'+$vm.repository+'/modules')
    $vm.module_list[key][2]=path.replace('...','https://github.com/'+$vm.repository+'/blob/master/module')
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
