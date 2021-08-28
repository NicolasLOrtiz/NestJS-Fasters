import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('foods')
export class Food {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 100, unique: true })
  name: string;

  @Column({ length: 100 })
  description: string;

  @Column({ type: 'decimal', precision: 2 })
  price: number;

  @Column({ length: 100 })
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
