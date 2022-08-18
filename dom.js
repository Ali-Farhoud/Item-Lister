let form = document.getElementById('addForm')
let item = document.getElementById('items')
let search = document.getElementById('filter')
//form submit event
item.addEventListener('click', removeItem)
form.addEventListener('submit', addItem)
search.addEventListener('keyup', filterItem)

function addItem(e) {
	e.preventDefault()

	let newItem = document.getElementById('txtinput').value
	if (newItem.length > 0) {
		let li = document.createElement('li')
		li.className = 'list-group-item d-flex'
		let dltbtn = document.createElement('button')
		dltbtn.className = 'btn btn-danger ms-auto btn-sm delete'
		dltbtn.textContent = 'X'

		li.appendChild(document.createTextNode(newItem))
		li.appendChild(dltbtn)
		item.appendChild(li)
		document.getElementById('txtinput').value = ''
	}
}

function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('are u sure?')) {
			let li = e.target.parentElement
			item.removeChild(li)
		}
	}
}
function filterItem(e) {
	let current = e.target.value.toLowerCase()
	let stuff = items.getElementsByTagName('li')
	Array.from(stuff).forEach(function (item) {
		let itemName = item.firstChild.textContent.toLowerCase()
		if (itemName.indexOf(current) != -1) {
			item.classList.add('d-flex', 'list-group-item')
		} else {
			item.classList.remove('d-flex')
			item.style.display = 'none'
		}
	})
}
