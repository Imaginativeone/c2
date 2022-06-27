// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

document.addEventListener('DOMContentLoaded', async () => {

  let names = window.api.getNames();
  console.log('names', names);

  let divNames = document.getElementById("names");

  let nameString = names.map((element) => {
    return element.name;
  }).join("<br />");

  divNames.innerHTML = nameString;

});
