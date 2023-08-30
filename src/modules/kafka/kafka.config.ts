import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

interface IKafkaConnectionConfig {
  transport: Transport.KAFKA;
  options: {
    client: {
      clientId: string;
      brokers: string[];
    };
  };
}

export const getKafkaConnectionConfig = (
  config: ConfigService,
): IKafkaConnectionConfig => {
  const clientId = config.getOrThrow<string>('KAFKA_CLIENT_ID');
  const brokers = config.getOrThrow<string>('KAFKA_BROKERS').split(' ');
  return {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId,
        brokers,
      },
    },
  };
};
