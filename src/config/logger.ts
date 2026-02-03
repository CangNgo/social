import { LoggerService, LogLevel } from "@nestjs/common";

export class AppLogger implements LoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: string, context?: string) {
    console.log(`***INFO***[${context}] |  ${message}`);
  }

  /**
   * Write an 'error' level log.
   */
  error(message: string, context?: string) {
    console.log(`***ERROR***[${context}] |   ${message}`);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: string, context?: string) {
    console.log(`***WARN***[${context}] |  ${message}`);
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: string, context?: string) {
    console.log(`***DEBUG***[${context}] |   ${message}`);
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: string, context?: string) {
    console.log(`***VERBOSE***[${context}] |   ${message}`);
  }
}
