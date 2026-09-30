export function findOneDoc({
  model,
  filter = {},
  projection = null,
} = {}) {
  return model.findOne(filter, projection);
}


export function createNewDoc({model,data = {},options = {}} = {}) {
    return model.create([data],options);
}