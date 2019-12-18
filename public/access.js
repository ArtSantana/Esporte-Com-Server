var postData;
var dataGO, dataBack, presetNumber;
const data = {
    dataGO,
	dataBack,
	presetNumber,
}
const del = {
    cleanDatabase: true,
}

async function post()
{    
	options = {
		method: 'POST',
		headers:{
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(postData)
	}

	const response = await fetch('/api', options);
	const json = await response.json();
}

async function getData()
{
    const response = await fetch('/api');
    const dataReceived = await response.json();
    
    return dataReceived;
}