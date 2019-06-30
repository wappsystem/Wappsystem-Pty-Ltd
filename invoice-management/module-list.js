(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "workflow":                 {url:"$H/m/invoice-management-workflow.html",router:1,name:"Invoice management",tags:"invoice,finance"},
        "invoice-data": 	        {url:"$H/m/invoice-data.html",Table:"invoice-wappsystem",form_module:"invoice-form",router:1},
        "invoice-form": 	        {url:"$H/m/invoice-form.html",Table:"invoice-wappsystem",client_table:"client-wappsystem"},
        "invoice-print": 	        {url:"$H/m/invoice-print.html",Table:"invoice-wappsystem", client_table:"client-wappsystem"},
        "client-data": 	            {url:"$H/m/client-data.html",Table:"client-wappsystem",form_module:"client-form",router:1},
        "client-form": 	            {url:"$H/m/client-form.html",Table:"client-wappsystem"},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
