function g(oid){
	if(!document.getElementsByClassName) return false;
	return document.getElementsByClassName(oid);
}
;(function(){
	var container = g('link');
	var tag = null;
	console.log(container.length);
	for(var i = 0;i<container.length;i++){
		container[i].onclick=function(){
			var _this_ = this;
			console.log(this.parentNode.getElementsByTagName('ul')[0].style.display);
			var showEle = _this_.parentNode.getElementsByTagName('ul')[0];
			/*this.nextSibling.style.display = 'block';*/
			if(tag!=null){
				if(tag == this){
					this.style.color = '#292421';
					showEle.style.display = '';
					tag = null
				}
				else{
					setTimeout(function(){
					tag.style.color = '#292421';
					tag.parentNode.getElementsByTagName('ul')[0].style.display = '';
					tag = _this_;},50)
					setTimeout(function(){
						_this_.style.color = '#ED9121';
						showEle.style.display = 'block';
					},500)
				}

			}
			else if(showEle.style.display == ''){
				setTimeout(function(){
				_this_.style.color = '#ED9121';
				showEle.style.display = 'block';
				tag = _this_;},500)
			}
			else{
				setTimeout(function(){
				this.style.color = '#ED9121';
				showEle.style.display = 'block';
				tag = _this_;},500)
			}
			
			
		}
	}
})()