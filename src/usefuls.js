export function appendOnce(parent, child) {
	const isInserted = document.querySelector('.ny_notauth_colba')
	if (!isInserted) {
		parent.append(child);
	}
}

export async function hostReactAppReady(selector = "#__next > div", timeout = 500) {
	return new Promise((resolve) => {
		const waiter = () => {
			const host_el = document.querySelector(selector);
			if (host_el?.getBoundingClientRect().height) {
				resolve();
			} else {
				setTimeout(waiter, timeout);
			}
		};
		waiter();
	});
}