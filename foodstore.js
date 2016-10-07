function dude(){
	table = document.getElementById("table");
	th = document.getElementById("tableHead");
	item1 = document.getElementById("item1");
	item2 = document.getElementById("item2");
	
	table.className = "dudeTable"
	th.className = "dudeHead"
	item1.className = "dudeItem"
	item2.className = "dudeItem"
}

function chick(){
	table = document.getElementById("table");
	th = document.getElementById("tableHead");
	item1 = document.getElementById("item1");
	item2 = document.getElementById("item2");
	
	table.className = "chickTable"
	th.className = "chickHead"
	item1.className = "chickItem"
	item2.className = "chickItem"
}

var xmlHttp = createXmlHttpRequestObject(); /* Initiate the request */

function createXmlHttpRequestObject(){
	var xmlHttp; /* variable to use for getting data*/

	if(window.ActiveXObject){
		try{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			xmlHttp = false;
		} /* for windows explorer */
	}else{
		try{
			xmlHttp = new XMLHttpRequest();
		}catch(e){
			xmlHttp = false;
		}
	} /* Connect to xml and is true when xml is connected */

	if(!xmlHttp)
		alert("cant create that object hoss!");
	else 
		return xmlHttp;
}

function process(){
	if(xmlHttp.readyState==0 || xmlHttp.readyState==4 ){ /* check is the request ready */
		food = encodeURIComponent(document.getElementById("userInput").value); /* like a javascript for htmlentities to escape*/
		xmlHttp.open("GET", "foodstore.php?food="+ food, true); /* method, things that u want to send and url to send */
		xmlHttp.onreadystatechange = handleServerResponse; /* if it response after send put it into this function */
		xmlHttp.send(null); /* send it */
	}else{
		setTimeout('process()',1000); /*try this every 1s */
	}
}

function handleServerResponse(){ /* the response is received */
	if(xmlHttp.readyState==4){ /* to check is xml busy */
		if(xmlHttp.status==200){ /* to check is server operate normally */
			xmlResponse = xmlHttp.responseXML; /*built in responseXML 8 to retrive the response*/
			xmlDocumentElement = xmlResponse.documentElement; /* to get the whole document in xml*/
			message = xmlDocumentElement.firstChild.data; 
			document.getElementById("underInput").innerHTML = '<span style="color:blue">' + message + '</span>' ;
			setTimeout('process()',1000);
		}else{
			alert('Something went wrong!');
		}
	}
}


