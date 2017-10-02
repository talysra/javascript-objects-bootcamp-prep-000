const playlist = {
  Korn: "Blind"
};

function updatePlaylist(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}

updatePlaylist(playlist, 'Rammstein', 'Adios')
