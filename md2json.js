md2json = function(md){
	var json = [];
		str = md;
		strArr = str.split("\n");
	var trimSpace = function(str){

	}
	var trim = function(str){
		return str.replace(/^\s*/,"").replace(/\s*$/,"");
	}
	strArr.forEach(function(v){
		var ret = false;
		var line = trim(v);
		var tag = "p";
		var data = line;
		;
		if((ret = line.match(/^(#{1,6})(.*?)(#*)$/)) && ret.length>=3){
			tag = "h"+ret[1].length
			data = trim(ret[2]);

		}else if((ret =line.match(/^(\-\s)(.*?)$/)) && ret.length>=2){
			tag = "li"
			data = trim(ret[2]);
		}else{
		}

	})




	return json;
}