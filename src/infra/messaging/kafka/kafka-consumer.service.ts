import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['up-humpback-5707-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dXAtaHVtcGJhY2stNTcwNySgiKuMzZzhK-a87HSg16Tv1pb1Ic6WQVSgKDo4JQs',
          password:
            'zIRq2_RP2DXEDkL4Zc3sXsuVMY9MnaWz7_roRS4_3wxLegP6Hiz_6F1Dm52wItnejybH6w==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
