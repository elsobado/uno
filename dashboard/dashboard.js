// primer Proyecto Moralis
(async function() {
  const serverUrl = "https://pztdaav8u51u.usemoralis.com:2053/server"
  const appId = "N7H5rYyvztAlgikEQC0m16LeMmMFpMURTu45sGxM"
  await Moralis.start({serverUrl,appId})
})()

async function login() {
  await Moralis.authenticate();

}
async function logout() {
  await Moralis.User.logOut();
  
}
async function transferNative() {
  const address = document.getElementById('native-address').value;
  const amount = document.getElementById('native-amount').value;
}
document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logout;


// Booostrap, old code
(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
 
})()
