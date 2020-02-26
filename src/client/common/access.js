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
	fetch('/api', postOptions);
}

async function postDeletePresets(n){
	delPreset = {
		preset: n
	}
	postOptions = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(delPreset)
	}
	fetch('/api', postOptions);
}

async function getData(){
    const response = await fetch('/api');
		const dataReceived = await response.json()
    return dataReceived;
}