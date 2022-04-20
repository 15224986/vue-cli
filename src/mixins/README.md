# rulesNumberEnglish.js
``` bash
# 只能输入数字及字母 （配合element-ui的表单验证的验证规则）
# 案例 views\user\add.vue
import rulesNumberEnglish from '@/mixins/rulesNumberEnglish.js';
mixins:[rulesNumberEnglish],
```


# calcIndex.js
``` bash
# 表格里面的序号的规则
# 案例 views\user\list.vue
import calcIndex from '@/mixins/calcIndex.js';
mixins:[calcIndex],
```


# sexText.js
``` bash
# 表格里面的性别转换的规则
# 案例 views\user\list.vue
import sexText from '@/mixins/sexText.js';
```


# validatePassword.js
``` bash
# 密码的验证规则 （配合element-ui的表单验证的验证规则）
# 案例 views\user\add.vue
import validatePassword from '@/mixins/validatePassword.js';
```

# deepCopy.js
``` bash
# js复杂数据类型的深层复制
# 案例 views\index\index.vue
import deepCopy from '@/mixins/deepCopy.js'
mixins:[deepCopy],
```

# utils.js
``` bash
# 页面中频繁使用的方法，数据，计算，过滤 等
# datePickerOptions element-ui 时间插件右侧按钮的数据
# handleSelectAll	element-ui selsect插件全选的方法
# setNewOptions		element-ui selsect联动更新option数据
# setDefaultTime	设置默认时间
# 案例 views\index\index.vue
import utils from '@/mixins/utils.js'
mixins:[utils],
```

# controlClass.js
``` bash
# 操控class的方法
# 案例 views\index\tableDrag.vue
import controlClass from '@/mixins/controlClass.js'
mixins:[controlClass],
