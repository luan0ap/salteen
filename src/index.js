function toChars (str) {
	return str.split('').map((n, i) => str.charCodeAt(i))
}

function reduce (hasher, base, value) {
	let i = 0
	let str = ''
	const chars = base ? value.match(/.{1,2}/g) : toChars(value)

	while (i < chars.length) {
		let tmp = base ? parseInt(chars[i++], 16) : chars[i++]
		for (let j = 0; j < hasher.length;) tmp ^= hasher[j++]
		str += base ? String.fromCharCode(tmp) : ('0' + tmp.toString(16)).substr(-2)
	}

	return str
}

export function encrypt (key) {
	return reduce.bind(reduce, toChars(key), 0)
}

export function decrypt (key) {
	return reduce.bind(reduce, toChars(key), 1)
}
