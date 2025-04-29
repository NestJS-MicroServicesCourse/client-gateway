import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from '../enum/order.enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(OrderStatus, {
    message: `status must be one of the following: ${Object.values(OrderStatus).join(', ')}`,
  })
  status: OrderStatus;
}
