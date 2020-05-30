exports.up = function(knex) {
    return knex.schema.createTable('usuario', function (table) {
        table.increments('Id');
        table.string('Nome').notNullable();
        table.string('Email').notNullable();
        table.string('Whatsapp');
    });

    /**
     * Tabela com chave estrangeira
     * return knex.schema.createTable('table2', function (table) {
     *  table.int('table1_id').notNullable()
     *  table.foreign('table1_id').references('id').inTable('table1')
     * })
     */
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
};
