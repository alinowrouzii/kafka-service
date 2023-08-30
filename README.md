# Nest KafkaModule Readme

## Description

Welcome to the **Nest KafkaModule**! This Nest.js module is designed to seamlessly integrate Kafka messaging into your Nest.js applications. It provides a `KafkaModule` that encapsulates a powerful `KafkaService`, allowing you to effortlessly interact with Kafka brokers.

## Installation

To get started with the Nest KafkaModule, follow these simple installation steps:

1. Install the package using your preferred package manager:

   ```bash
   npm install nestjs-kafka-service
   ```

   or

   ```bash
   yarn add nestjs-kafka-service
   ```

2. Set up the required environment variables in your application. The following environment variables are necessary for the proper functioning of the package:

<center>

| Variable         | Description                                       |
|------------------|---------------------------------------------------|
| KAFKA_CLIENT_ID  | The client ID to identify your Kafka client.     |
| KAFKA_BROKERS    | Comma-separated list of Kafka broker addresses.  |

</center>

## Usage

Once you have the Nest KafkaModule installed and your environment variables set up, you can start using it in your Nest.js application.

1. **Import the KafkaModule** into your desired module:

   ```typescript
   import { Module } from '@nestjs/common';
   import { KafkaModule } from 'nest-kafka-module';

   @Module({
     ...
     imports: [
       KafkaModule,
     ],
     ...
   })
   export class YourModule {}
   ```

2. **Inject the KafkaService** into any service where you want to use Kafka messaging:

   ```typescript
   import { Injectable } from '@nestjs/common';
   import { KafkaService } from 'nest-kafka-module';

   @Injectable()
   export class YourService {
     constructor(private readonly kafkaService: KafkaService) {}

     // Your methods and logic here
     doStuff() {
        const topic = 'your-topic-name';
        const message = JSON.stringify({
          // Your message payload
        });

        this.kafkaService.produce(topic, message);
      }
   }
   ```


## Additional Configuration (Optional)

The `KafkaModule` accepts additional configuration options when importing. You can provide these options to customize the behavior of the Kafka client. For example:

```typescript
KafkaModule.forRoot({
  clientId: 'my-app',
  brokers: ['kafka-broker1:9092', 'kafka-broker2:9092'],
  // Additional configuration options
}),
```

For more advanced configuration, refer to the [nest-kafka-service documentation](https://github.com/alinowrouzii/kafka-service).

## Contributing

We welcome contributions to the Nest KafkaModule. If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the [GitHub repository](https://github.com/alinowrouzii/kafka-service).


Thank you for choosing the Nest KafkaModule for your Kafka messaging needs! If you have any questions or need further assistance, don't hesitate to reach out.

**Maintainer:** Ali Nowrouzi<br>
**Email:** alinowrouzii@gmail.com<br>
**GitHub:** [My GitHub account](https://github.com/alinowrouzii)