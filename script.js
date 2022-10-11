var counter = Number(localStorageGet("counter"));

function update_counter()
{
	document.getElementById('button-counter').innerHTML = 'Clicks: ' + counter;
	localStorageSet("counter",counter);
}

function increment_counter()
{
	counter++;
	update_counter();
}

function localStorageGet(name)
{
	let local = 0;
	try {local = localStorage.getItem(name)} catch (exception) {}
	return local;
}

function localStorageSet(name, value)
{
	let local = 0;
	try {local = localStorage.setItem(name, value)} catch (exception) {}
	return local;
}