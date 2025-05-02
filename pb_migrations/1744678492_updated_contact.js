/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3711015378")

  // remove field
  collection.fields.removeById("text1384709455")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number1384709455",
    "max": null,
    "min": null,
    "name": "form",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3711015378")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1384709455",
    "max": 0,
    "min": 0,
    "name": "form",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("number1384709455")

  return app.save(collection)
})
