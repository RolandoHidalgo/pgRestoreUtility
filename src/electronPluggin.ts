import * as electron from 'electron';

export const electronPluggin = {
    install: function (Vue: any) {
        Vue.prototype.$electron = electron;
    }
};
