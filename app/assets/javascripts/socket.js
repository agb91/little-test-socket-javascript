var echo_service = new WebSocket('wss://echo.websocket.org');

echo_service.onmessage = function(event){
   append("messaggio ricevuto")
   alert(event.data);
   echo_service.close();
}

echo_service.onopen = function(){
   append("connessione effettuata")
   echo_service.send("test messaggio invio!");
}

echo_service.onclose = function(){
   append("connessione chiusa");
}

echo_service.onerror = function(){
   append("errore nella connessione");
}

append = function(text){
   document.getElementById("eventi_websocket").insertAdjacentHTML('beforeend',
   "<li>" + text + ";</li>");
}