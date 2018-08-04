import Vue from 'vue'
import irow from './components/row'
const coms = {
    irow
}

const install = function(Vue){
    if(install.installed) return;
    Object.keys(coms).forEach(key => {
        Vue.component(key, coms[key]);
    });

}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue);
}

const ui = {
    install
}
module.exports.default = module.exports = ui;

