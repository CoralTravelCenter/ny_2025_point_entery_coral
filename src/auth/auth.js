function hide(root) {
	root.classList.add('animate__bounceOutLeft')
	root.classList.remove('animate__bounceInLeft')
}

export function auth(root, gamePage) {
	root.classList.add('animate__animated', 'animate__bounceInLeft')
	const colbaAction = document.createElement('div')
	colbaAction.classList.add('ny_notauth_colba__action')
	colbaAction.innerHTML = '<span>Разыгрываем путешествие</span>'

	const actionButton = document.createElement('button')
	actionButton.classList.add('action-btn')
	actionButton.textContent = 'Тут';
	actionButton.addEventListener('click', () => {
		ym(96674199, 'reachGoal', 'NY-game-channel', {'type': 'sled-overlay', 'details': 'authorised'})
		window.open(gamePage, '_blank')
	})

	const closeButton = document.createElement('button')
	closeButton.classList.add('close-btn')
	closeButton.addEventListener('click', () => hide(root))
	colbaAction.prepend(closeButton)
	colbaAction.append(actionButton)

	root.append(colbaAction)
	root.setAttribute('data-auth', true)
	return root
}

