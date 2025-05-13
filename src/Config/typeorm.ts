import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Product } from '../entities/product.entity';
dotenv.config();


const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'Colombia123',
  database: process.env.DB_NAME || 'proyectofinal',
  entities: [Product],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  synchronize: true,
  logging: true,
});

export default AppDataSource;