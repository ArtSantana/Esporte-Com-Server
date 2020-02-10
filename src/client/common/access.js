let data = {
	presetNumber: 0,
	positions: {
		matrixGoTeamA: [],
		matrixGoTeamB: [],
		matrixBackTeamA: [],
		matrixBackTeamB: [],
	}
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
}

async function getData(){
    const response = await fetch('/api');
		const dataReceived = await response.json()
    
    return dataReceived;
}