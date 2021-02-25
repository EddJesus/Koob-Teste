import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('students', (table)=>{
    table.increments('students_id').primary();
        
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.string('class', 255).notNullable();
    table.integer('age', 2).notNullable();
    table.string('schedule', 255).notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('students');
}

