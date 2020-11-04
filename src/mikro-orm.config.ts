import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constant";
import { Post } from "./entities/Post";
import path from "path";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d\.[tj]s$/
    },
    entities: [ Post ],
    dbName: 'ledit',
    user: 'postgres',
    password: 'root',
    debug: !__prod__,
    type: 'postgresql'
} as Parameters<typeof MikroORM.init>[0];