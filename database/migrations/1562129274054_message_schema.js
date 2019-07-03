'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessageSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments()
      table.text('textChat', 'longtext').notNullable()
      table.integer('userID', 10).notNullable().unsigned().unique().references('id').inTable('users')
      table.integer('GroupID', 10).notNullable().unsigned().unique().references('id').inTable('groups')
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessageSchema
