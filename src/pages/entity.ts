import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, Length } from 'class-validator';

@Entity()
export default class Page extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Length(5, 25)
  @Column('text')
  title: string;

  @IsString()
  @Length(10)
  @Column('text')
  content: string;
}
