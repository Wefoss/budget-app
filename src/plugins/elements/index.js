import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)
Vue.prototype.$message = Message                       
Vue.prototype.$confirm = MessageBox.confirm

import {
    Button,
    Form,
    Select,
    Input,
    FormItem,
    Card,
    Option,
    Alert,
    Dialog,
    MessageBox,
    Message
} from 'element-ui';

const elememts = [
    Button,
    Form,
    Select,
    Input,
    FormItem,
    Card,
    Option,
    Alert,
    Dialog,
   
]

elememts.forEach(El => Vue.use(El, { locale }))