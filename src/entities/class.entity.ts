import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Product} from './product.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column('text')
  description!: string;

  @ManyToOne(() => User, (user) => user.classesTaught)
  teacher!: User;

  @ManyToMany(() => User, (user) => user.classesEnrolled)
  @JoinTable()
  students!: User[];

  @OneToMany(() => Product, (product) => product.classRef)
  tasks!: Product[];

  @CreateDateColumn()
  createdAt!: Date;
}