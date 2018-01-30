import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    menuItems: computed(() => {
      
        return [
            {name: 'home', link: 'index'}, 
            {name: 'friends', link: 'friends'}, 
            {name: 'about', link: 'about'}
        ];

    })
});
 