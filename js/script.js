const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (event) => {
	event.preventDefault();
	const input = document.querySelector('#input');
	const ul = document.querySelector('#list');
	const delButton = '<a class="del-button" href="#">Удалить</a>'
	if(event.target.classList.contains('add-button')){
		ul.innerHTML += `<li class='list-item'>${input.value} ${delButton}</li>`;
		input.value = '';
	}
	if (event.target.classList.contains('del-button')){
		event.target.closest('li').remove();
	}
	if (event.target.classList.contains('list-item')){
		event.target.closest('li').classList.toggle('done');
	}
});