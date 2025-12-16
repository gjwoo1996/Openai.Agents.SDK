"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const typeOrmConfig = () => {
    return {
        type: 'mariadb',
        host: 'mariadb',
        port: 3306,
        username: 'root',
        password: 'mysqlrootpassword',
        database: 'Chatbot',
        synchronize: true,
        logging: true,
        autoLoadEntities: true,
    };
};
exports.typeOrmConfig = typeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map