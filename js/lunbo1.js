// JavaScript Document		
 function slide(obj){	 
	// var oBox=hxsd_tools.getByClass(document,'slide')[0];
	 var prebtn=obj.children[0];
	 var nextbtn=obj.children[1];
	 var ol=obj.getElementsByTagName('ol')[0];
	 var oul=obj.getElementsByTagName('ul')[0];
	 var abtn=ol.getElementsByTagName('li');
	 var ali=oul.getElementsByTagName('li');
	 
	 var li_w=hxsd_tools.getStyle(ali[0],'width');
	 var n=0;
	 var timer=null;
	 oul.style.width=li_w*ali.length+'px'; 
	 function chagebtn(n){
			  for( j=0;j<abtn.length;j++){
				 abtn[j].className="";
			  }
		      abtn[n].className="a1";
	 }
		  
	 function show(){
			 clearInterval(timer)
			 timer=setInterval(function(){ 
				chagebtn(n);
			    hxsd_tools.animate(oul,{ 'left':-n*li_w });
				 n++;
				 if(n>abtn.length-1){
					 n=0;
				 }
			 },2000)
	 }
	 show();
     for(var i=0;i<abtn.length;i++){
			abtn[i].index=i;	 
			abtn[i].onmouseover=function(ev){
				oEv=ev||window.event;
				clearInterval(timer)
				chagebtn(this.index)
				hxsd_tools.animate(oul,{ 'left':-this.index*li_w });
                oEv.cancelBubble=true;
				n=this.index;		
			}
			/*abtn[i].onmouseout=function(){
				  show(this.index);	   
			};*/
		    prebtn.onclick=function(){
				 n--;
				 if(n<0){ n=0; };
				 chagebtn(n);
		      hxsd_tools.animate(oul,{ 'left':-n*li_w });	
			   
		   };
		   nextbtn.onclick=function(){
				n++;
				if(n>abtn.length-1){n=0;}
				hxsd_tools.animate(oul,{ 'left':-n*li_w });
				chagebtn(n); 	 
		  }; 
		  
		obj.onmouseover = function() { 
		    clearInterval(timer);
			prebtn.style.display="block";
			nextbtn.style.display="block";
			
			
	    };
	    obj.onmouseout = function() {
			prebtn.style.display="none";
			nextbtn.style.display="none"; 
		      show();
	    };	  
    }
  }

	
	
