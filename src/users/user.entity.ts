import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  @Exclude()
  password: string;


  @AfterInsert()
  logInsert(){
    console.log('Inserted user with id', this.id);
  }

  @AfterUpdate()
  logUpdate(){
    console.log('Updated user with id', this.id);
  }

  @AfterRemove()
  logRemove(){
    console.log('Removed user with id', this.id);
  }
}