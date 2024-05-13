// src/index.ts
var src_default = {
	async fetch(request, env, ctx) {
	  var browser_message;
	  var method = request.method;
	  var status_code = 200;
	  var request_url = request.URL;
	  let randomNumber = getRandomInt(4);
	  let response = getResponse(randomNumber);
	  //let botScore = request.cf.botManagement.score
	  const bot_score = request.cf.botManagement.score;
	  //console.log(bot_score)
	  if (request.method == "GET") {
		var status_code = 200;
		if(request.cf.botManagement.score < 30) {
			const httpbin = new URL("http://httpbin.org/get");
          	const bot = new Request(httpbin, request);
          	let response = await fetch(bot);
          	return response
		} else {
			request = new Request(request)
			response = await fetch(request, {
			  cf: {
				resolveOverride: "espn.com",
			  },
			})
			return response
		 }
	  } else {
		var status_code = 401;
		browser_message = "!ERROR! You tried accessing this page via the " + request.method + " Method.  Only the GET request method is supported";
	  }
	  const output = {
		PASSFAIL: browser_message
	  };
	  return new Response(JSON.stringify(output), {
		headers: {
		  "content-type": "application/json;charset=UTF-8"
		}
	  });
	}
  };
  function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }
  function getResponse(switchnumber) {
	var testResponse;
	switch (switchnumber) {
	  case 0:
		testResponse = "Mos Eisley, you will never find a more wretched hive of scum and villainy";
		break;
	  case 1:
		testResponse = "Do. Or do not. There is no try.";
		break;
	  case 2:
		testResponse = "These aren\u2019t the droids you\u2019re looking for";
		break;
	  case 3:
		testResponse = "I find your lack of faith disturbing.";
		break;
	}
	console.log(testResponse);
	return testResponse;
  }
  export {
	src_default as default
  };
  //# sourceMappingURL=index.js.map
  