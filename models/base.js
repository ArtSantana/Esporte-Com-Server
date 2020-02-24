let basePreset = [];

for(let i=0; i<11; i++) {
  basePreset[i] = [];
}

for(let i=0; i<11; i++) {
  for(let j=0; j<2; j++) {
    basePreset[i][j] = "";
  }
}

const baseMaster = {
  matrixGoTeamA: basePreset,
  matrixGoTeamB: basePreset,
  matrixBackTeamA: basePreset,
  matrixBackTeamB: basePreset
}

module.exports = baseMaster;