Email.Email = DS.Model.extend({
  to: DS.attr(),
  subject: DS.attr(),
  message: DS.attr(),
  folder: DS.belongsTo('folder', {async: true})
});
