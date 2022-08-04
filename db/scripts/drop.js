const { knex, knexConfig } = require("../knex")

async function drop() {
    const dbName = knexConfig.connection.database;
    await knex.raw(`DROP DATABASE ${dbName}`);
    console.log(`💥 database dropped`);

    await knex.destroy();

    console.log()
}

drop;