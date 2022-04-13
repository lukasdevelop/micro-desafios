import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DesafiosModule } from './desafios/desafios.module';
import { PartidasModule } from './partidas/partidas.module';
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nodeaws:LucasAmaral7@cluster0.i75j4.mongodb.net/srdesafios?retryWrites=true&w=majority',
    { useNewUrlParser: true }),
    DesafiosModule,
    PartidasModule,
    ProxyRMQModule,
    ConfigModule.forRoot({isGlobal: true}),
],
})
export class AppModule {}
