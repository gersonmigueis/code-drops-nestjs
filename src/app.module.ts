import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gerson:aCkWNQz5d2SZqwoU@codedrops.cuz25.mongodb.net/test',
    ),
    UsersModule,
  ],
})
export class AppModule {}
