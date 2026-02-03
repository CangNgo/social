import { ConsoleLogger } from "@nestjs/common";

export class LoggerDev extends ConsoleLogger {
  constructor(context: string) {
    super(context);
  }
}