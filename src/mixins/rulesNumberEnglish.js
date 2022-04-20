export default {
	methods: {
		rulesNumberEnglish(rule, value, callback) {
			const reg = /^[0-9a-zA-Z]+$/;
			if (!reg.test(value)) {
				callback(new Error());
			} else {
				callback();
			}
		}
	}
}