const spawn = require('child_process').spawn;

const grep = spawn('grep.exe');


function control (grep){
	this.send = function(data){
		grep.stdin.write(data.toString() +" \n");
	}
	this.end = function(){
		grep.kill();
	}
}



var control = new control(grep);


console.log("Socket open ");
control.send("juan");	
control.send("juan");	
control.send("juan");	
control.send("juan");	
control.send("juan");	
control.send("juan");	
control.send("juan");	




grep.stdout.on('data', (data) => {
 
  console.log(data.toString());
  
});
