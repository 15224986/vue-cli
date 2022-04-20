export default {
	methods: {
		validatePassword(rule, value, callback) {
			const reg = /^[a-zA-Z0-9]{3,12}$/;
			if (value === '') {
				callback(new Error('密码不能为空'));
			} else if (!reg.test(value)) {
				callback(new Error('只能输入数字及字母且长度在3到12位'));
			} else {
				callback();
			}
		},
	}
}