'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupSchema extends Schema {
  up () {
    this.create('groups', (table) => {
      table.increments()
      table.varchar('name', 80).notNullable()
      table.integer('senderID', 10).notNullable().unique().unsigned()
      table.integer('receiverID', 10).notNullable().unique().unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('groups')
  }
}

module.exports = GroupSchema
