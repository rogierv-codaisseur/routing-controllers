import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, Length, IsEmail } from 'class-validator';

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Length(2)
  @Column('text', { nullable: false })
  firstName: string;

  @IsString()
  @Length(2)
  @Column('text', { nullable: false })
  lastName: string;

  @IsEmail()
  @Column('text', { nullable: false })
  email: string;

  @IsString()
  @Length(3)
  @Column('text')
  city: string;
}
