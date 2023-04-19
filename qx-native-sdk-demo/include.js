/**
 * This file includes the required ext-all js and css files based upon "theme" and "rtl"
 * url parameters.  It first searches for these parameters on the page url, and if they
 * are not found there, it looks for them on the script tag src query string.
 * For example, to include the neptune flavor of ext from an index page in a subdirectory
 * of extjs/examples/:
 * <script type="text/javascript" src="../../examples/shared/include-ext.js?theme=neptune"></script>
 */
(function() {    
	// load css		
	var theme = 'metro';
    var css_array = new Array();
    var t= new Date().getTime();
	
    // load cu js
    var js_array = new Array();
    
    var scriptObjects = document.getElementsByTagName("script");
    
    for(var i = 0;i < scriptObjects.length;i++)
    {
        var s = scriptObjects[i];
        
        if(s.src && s.src.match(/include\.js(\?.*)?$/)){
        	
            var path = s.src.replace(/js\/include\.js(\?.*)?$/,'');
            var type = s.src.match(/\?type=([a-z,]*)/);
            {
			    js_array =[ 
					'utility/json2.js',
					'utility/easyui/jquery.min.js',
					'utility/easyui/jquery.easyui.min.js',
					'utility/easyui/jquery.xml2json.js',
					'utility/easyui/locale/easyui-lang-zh_CN.js',
					'utility/jquery.fullscreen-min.js',
					];
					
				
            }
            break;
        }
    }
    
    css_array = css_array.concat([
	  "utility/easyui/themes/"+theme+"/easyui.css",
	  "utility/easyui/themes/icon.css",
	  "utility/easyui/themes/color.css"
	]);
	
    for(var j = 0;j < css_array.length;j++)
    {
        document.write('<link rel="stylesheet" type="text/css" href="'+css_array[j]+'?t='+t+'" />');
    };
    
    for(var j = 0;j < js_array.length;j++)
    {
    	if(js_array[j].indexOf("?") > 0){
    		document.write('<script type="text/javascript" src="'+js_array[j]+'&t='+t+'"></script>');
    	}else{
        	document.write('<script type="text/javascript" src="'+js_array[j]+'?t='+t+'"></script>');
    	}
    };
    
})();
