/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


var src_default = {
	
	async fetch(request: { method: string; URL: string; }, env: any, ctx: any) {
		//set the basic variables
		var browser_message;
	  	var method = request.method;
		var status_code = 200; //set status code to a default number
		var request_url = request.URL;
	   
		
		let randomNumber = getRandomInt(4)
		let response = getResponse(randomNumber)


		//console.log("Logging: " + method + " " + request_url)  //check the incoming Method and URL
		if(request.method == "GET") {
			var status_code = 200;
			browser_message = "Congrats!  You accessed this page via the " + request.method + " Method ====> " + response
		 }
		 else{
			var status_code = 401;
			browser_message = "!ERROR! You tried accessing this page via the " + request.method + " Method.  Only the GET request method is supported";
		}
		const output = {
			PASSFAIL: browser_message,
		};
		return new Response (JSON.stringify (output), {
			status: status_code, 
			headers: {
				'content-type': 'application/json;charset=UTF-8',
			},
		});
	}
  };

function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}
function getResponse(switchnumber: number){
	var testResponse
	//console.log(switchnumber)
	switch (switchnumber){
		case 0:
			testResponse = "Mos Eisley, you will never find a more wretched hive of scum and villainy"
			break;
		case 1:
			testResponse = "Do. Or do not. There is no try."
			break;
		case 2:
			testResponse = "These aren’t the droids you’re looking for"
			break;
		case 3:
			testResponse = "I find your lack of faith disturbing."
			break;
	}
	console.log(testResponse)
	return testResponse

}
export {
	src_default as default
};

  
  
  
