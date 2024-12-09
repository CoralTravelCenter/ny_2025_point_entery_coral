export function appendOnce(parent, child) {
	console.log(!parent.contains(child))
	if (!parent.contains(child)) {
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