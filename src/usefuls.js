export function appendOnce(parent, child) {
	console.log(!parent.contains(child))
	if (!parent.contains(child)) {
		parent.append(child);
	}
}