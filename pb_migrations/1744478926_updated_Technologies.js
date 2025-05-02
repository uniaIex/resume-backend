/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_56780006")

  // update collection data
  unmarshal({
    "name": "technology"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_56780006")

  // update collection data
  unmarshal({
    "name": "Technologies"
  }, collection)

  return app.save(collection)
})
