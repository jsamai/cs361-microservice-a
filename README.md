# CS361 Microservice A: Horse Hands Unit Converter
- A JavaScript-based microservice for converting horse hands units to feet or meters.

## Dependencies:
- [Express](https://expressjs.com)

## Communication Contract:

### How to REQUEST data from the microservice:

### General Requirements:
- HTTP requests made to the microservice should be in JSON format.
- The microservice only accepts POST requests. It does not have a frontend.

### Options: Web vs. Self Hosting

---

**Option A: HTTP Web Hosted Microservice**
- The Horse Hands Unit Converter microservice is being hosted on OSU's flip server at http://flip3.engr.oregonstate.edu:50031/hands-converter/
- If your preference is to avoid self-hosting this microservice, HTTP requests can be made to the microservice being hosted on the server. Instructions on how to do this are described below.
- The hosted version has the added benefit of eliminating the need to download the microservice locally on your own machine or server, or manually apply patches.

No installation required if you plan to use the web-hosted version of the microservice.

---

**Option B: Self-Hosted Microservice:**
- The Horse Hands Unit Converter microservice can be self-hosted on your machine or server.
- The source code can be downloaded from GitHub here: 
  https://github.com/jsamai/cs361-microservice-a

To install and run the microservice self-hosted:
- Download the source code zip file from the link above.
- Check if you have NodeJS installed by entering `node --version` into your terminal.
	- If a version number appears, then NodeJS is already installed.
	- If node is not installed, you can download it from: https://nodejs.org/en
- Extract the files from the microservice zip to the folder of your choice.
- Open a terminal from the directory into which you extracted the files, and enter:
	- `npm install` (this installs the dependencies)
- Configure the port number on which you want the microservice to run by changing the `port` value in `config.js`
- To run the microservice, enter `node app.js` into your terminal.

---

**Endpoints and Request Format (for both Options A & B):**
- **CONVERT UNITS**: Converts the input hands value to the specific unit (feet or meters)
	- Endpoint: `http://your-site.com/hands-converter/convert` 
	- HTTP request format: JSON containing: `{hands: yourValue, toUnit: 'unit'}` (Note: toUnit = 'feet' or 'meters')
- **SET BREED**: Gets the average hands units of the specified breed
	- Endpoint: `http://your-site.com/hands-converter/set-breed`
	- HTTP request format: JSON containing: `{breed: 'yourBreed'}`

---

### How to RECEIVE data from the microservice:
- The Horse Hands Unit Converter microservice returns data as JSON objects.
- The data can be received via HTTP response. See below for response details.

**CONVERT UNITS requests:**
- JSON object response contains: `{[toUnit]: conversion}`
  Note: `toUnit` name will be 'feet' or 'meters'

**SET BREED requests:**
- JSON object response contains: `{hands: newHands}`

---

### Examples:
For detailed examples of data being requested and received from the Horse Hands Unit Converter microservice's endpoints, please see the files in `test_clients` folder.

---

### UML Diagram Depicting Requests and Responses to Microservice
![UML-Diagram](https://github.com/jsamai/cs361-microservice-a/assets/130112573/058b43b6-96f5-4b49-a9b4-6e2b42c066d8)
