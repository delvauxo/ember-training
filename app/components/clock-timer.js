import Component from '@ember/component';
import {run} from '@ember/runloop'

export default Component.extend({
    tagName: 'span',
    value: 10,
    finishedValue: '',
    init() {
        this._super(...arguments);
        this.update();
    },
    update() {
        run.later(this, function() {
            if(this.get('value') > 0) {
                this.decrementProperty('value', 2)
                this.update()
            } else {
                this.set('value', this.get('finishedValue'));
            }
        }, 1000)
    }

});
 