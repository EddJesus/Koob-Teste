import knex from "knex";

import * as conn from '../../knexfile';

const config = conn.default.development;

const connection = knex(config);

export default connection;