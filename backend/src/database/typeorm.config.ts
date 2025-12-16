import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig = (): TypeOrmModuleOptions => {
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
