
import Vue from 'vue';
const has = Vue.directive('has', {
    inserted: function (el, binding, vnode) {
        let b = false;
        for (var item in vnode.context.$route.meta.permission) {
            var vhas = vnode.context.$route.meta.permission[item].vhas;
            if (binding.value == vhas) {
                b = true;
                return;
            }
            else {
                b = false;
            }
        }
        if (!b) {
            el.parentNode.removeChild(el);
        }
    }
});
export { has };
