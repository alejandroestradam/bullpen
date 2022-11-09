function limiter(n) {
	if (n === 6) {
		return 3;
	} else {
		console.log(3 * limiter(n + 1));
		return 3 * limiter(n + 1);
	}
}

console.log(limiter(3));
