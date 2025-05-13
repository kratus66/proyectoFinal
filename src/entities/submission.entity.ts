import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
  } from 'typeorm';
  import { Product } from './product.entity';
  import { User } from './user.entity';
  
  @Entity()
  export class Submission {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @ManyToOne(() => Product, (product) => product.submissions)
    task!: Product;
  
    @ManyToOne(() => User, (user) => user.submissions)
    student!: User;
  
    @Column('text')
    content!: string; // texto, archivo o link
  
    @Column({ nullable: true })
    grade!: number;
  
    @CreateDateColumn()
    submittedAt!: Date;
  }