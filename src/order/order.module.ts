import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Repository } from '../repository/Repository';
import { OrderDto } from './dto/order.dto';
import { ORDER_REPOSITORY } from '../constants';

@Module({
  controllers: [OrderController],
  providers: [
    OrderService,
    { provide: ORDER_REPOSITORY, useValue: new Repository<OrderDto>() },
  ],
})
export class OrderModule {}
