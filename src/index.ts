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

/**
 * Testing steps:
 *  Positive: 
 * 	curl -i -X POST http://wispy-heart-e661.sstierer23.workers.dev
 * response should be:  
 * HTTP/1.1 200 OK
 * Content-Length: 68
 * Content-Type: application/json;charset=UTF-8
 * {"PASSFAIL":"Congrats!  You accessed this page via the POST Method"}%   

 * Negative:curl -i -X GET http://wispy-heart-e661.sstierer23.workers.dev
 * response should be:
 * HTTP/1.1 401 Unauthorized
 * Content-Length: 115
 * Content-Type: application/json;charset=UTF-8
 * {"PASSFAIL":"!Error! You tried accessing this page via the GET Method.  Only the POST request method is supported"}%
*/
var src_default = {
	async fetch(request: { method: string; URL: string; }, env: any, ctx: any) {
		//set the basic variables
		var browser_message;
	  	var method = request.method;
		var status_code = 200; //set status code to a default number
		var request_url = request.URL;

		console.log("Logging: " + method + " " + request_url)  //check the incoming Method and URL
		if(request.method == "POST") {
			var status_code = 200;
			browser_message = "Congrats!  You accessed this page via the " + request.method + " Method"
		 }
		 else{
			var status_code = 401;
			browser_message = "!Error! You tried accessing this page via the " + request.method + " Method.  Only the POST request method is supported";
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
  export {
	src_default as default
  };
  //# sourceMappingURL=index.js.map
  
  
  
