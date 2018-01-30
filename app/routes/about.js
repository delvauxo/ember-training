import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {name: 'Gilles', age: 43},
            {name: 'Olivier', age: 30},
            {name: 'Stéphanie', age: 31},
            {name: 'Jérémy', age: 28}
        ]
    }
});
 