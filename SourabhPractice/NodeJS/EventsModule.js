var events=require('events');
var eventEmitter= new events.EventEmitter();

//Create an Event Handler
var myEventHandlerScream=function(){
    console.log('Scream Event Is Fired');
}
var myEventHandlerSmile=function()
{
    console.log('Smile Event is Fired');
}

//Assign the event handler to an  event
eventEmitter.on('scream',myEventHandlerScream);
eventEmitter.on('smile',myEventHandlerSmile);

var a=2;
//Fire The Scream Event if a > 20
if(a>20)
    eventEmitter.emit('scream');
else
    eventEmitter.emit('smile');