import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Producer } from 'kafkajs';

@Injectable()
export class KafkaService implements OnApplicationBootstrap {
  private producer: Producer;

  constructor(
    @Inject('KAFKA_SERVICE')
     private readonly loggerClient: ClientKafka,
  ) {}

  async onApplicationBootstrap() {
    this.producer = await this.loggerClient.connect();
    console.log('kafka connected...');
  }

  async produce(topic: string, message: string) {
    this.producer.send({
      topic,
      acks: 1,
      messages: [{ value: message }],
    });
  }
}
