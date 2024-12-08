function show(colbaAction) {
	colbaAction.classList.remove('animate__bounceOutLeft')
	colbaAction.classList.add('animate__bounceInLeft')
}

function hide(colbaAction) {
	colbaAction.classList.add('animate__bounceOutLeft')
	colbaAction.classList.remove('animate__bounceInLeft')
}

export function notAuth(root, gamePage) {
	const colbaContainer = document.createElement('div');
	colbaContainer.classList.add('ny_notauth_colba__container')

	const colbaImg = document.createElement('img')
	colbaImg.classList.add('ny_notauth_colba__img')
	colbaImg.src = 'https://b2ccdn.coral.ru/content/ny_colba_desk_not_auth.gif';

	const colbaAction = document.createElement('div')
	colbaAction.classList.add('ny_notauth_colba__action', 'animate__animated')
	colbaAction.innerHTML = '<span>Подарим часть<br> путешествия или целое!</span>'

	const actionButton = document.createElement('button')
	actionButton.classList.add('action-btn')
	actionButton.textContent = 'Начать'
	actionButton.addEventListener('click', () => {
		ym(96674199, 'reachGoal', 'NY-game-channel', {'type': 'sled-overlay', 'details': 'not-authorised'})
		window.open(gamePage, '_blank')
		hide(colbaAction)
	})

	const closeButton = document.createElement('button')
	closeButton.classList.add('close-btn')
	closeButton.addEventListener('click', () => hide(colbaAction))
	colbaAction.prepend(closeButton)
	colbaAction.append(actionButton)

	colbaContainer.addEventListener('mouseenter', () => show(colbaAction))
	colbaContainer.append(colbaImg)
	root.append(colbaContainer, colbaAction)
	root.setAttribute('data-auth', false)
	return root
}

