
exports.seed = function(knex) {
  return knex('todos').del()
    .then(function () {
      return knex('todos').insert([
        {id: 1, task: 'eat', priority: 'very high', completed: 'yes'},
        {id: 2, task: 'sleep', priority: 'extremely high', completed: 'no'},
        {id: 3, task: 'code', priority: 'relatively high', completed: 'yes'},
        {id: 4, task: 'repeat', priority: 'high', completed: 'no'}
      ]);
    });
};
