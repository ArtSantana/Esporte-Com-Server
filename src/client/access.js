let data = {
	presetNumber: 0,
	positions: {
		matrixGoTeamA: [],
		matrixGoTeamB: [],
		matrixBackTeamA: [],
		matrixBackTeamB: [],
	}
}
const del = {
    cleanDatabase: true
}

async function postPreset(){
	postOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}
	const response = await fetch('/api/presets', postOptions);
	const json = await response.json();
}

async function postDeletePresets(){
	postOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}
	const response = await fetch('/api/delete', postOptions);
	const json = await response.json();
}

async function getData(){
    const response = await fetch('/api');
	const dataReceived = await response.json()
    
    return dataReceived;
}