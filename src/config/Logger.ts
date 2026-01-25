import { LoggerService, LogLevel } from "@nestjs/common";

export class Logger implements LoggerService {
  private logLevels: LogLevel[] = ['log', 'error', 'warn', 'debug', 'verbose'];

  /**
   * Set log levels that should be displayed
   */
  setLogLevels(levels: LogLevel[]) {
    this.logLevels = levels;
  }

  /**
   * Format log message with timestamp and context
   */
  private formatMessage(level: string, message: string, context?: string): string {
    const timestamp = new Date().toISOString();
    const contextStr = context ? `[${context}]` : '';
    return `${timestamp} ${level} ${contextStr} ${message}`;
  }

  /**
   * Get color code for log level
   */
  private getColorCode(level: string): string {
    const colors: Record<string, string> = {
      LOG: '\x1b[32m',    // Green
      ERROR: '\x1b[31m',  // Red
      WARN: '\x1b[33m',   // Yellow
      DEBUG: '\x1b[36m',  // Cyan
      VERBOSE: '\x1b[90m', // Gray
      FATAL: '\x1b[35m',  // Magenta
    };
    return colors[level] || '\x1b[0m';
  }

  /**
   * Reset color code
   */
  private resetColor(): string {
    return '\x1b[0m';
  }

  /**
   * Check if log level should be displayed
   */
  private shouldLog(level: LogLevel): boolean {
    return this.logLevels.includes(level);
  }

  log(message: string, context?: string) {
    if (!this.shouldLog('log')) return;
    const formatted = this.formatMessage('LOG', message, context);
    console.log(`${this.getColorCode('LOG')}${formatted}${this.resetColor()}`);
  }

  error(message: string, trace?: string, context?: string) {
    if (!this.shouldLog('error')) return;
    const formatted = this.formatMessage('ERROR', message, context);
    console.error(`${this.getColorCode('ERROR')}${formatted}${this.resetColor()}`);
    if (trace) {
      console.error(`${this.getColorCode('ERROR')}${trace}${this.resetColor()}`);
    }
  }

  warn(message: string, context?: string) {
    if (!this.shouldLog('warn')) return;
    const formatted = this.formatMessage('WARN', message, context);
    console.warn(`${this.getColorCode('WARN')}${formatted}${this.resetColor()}`);
  }

  debug(message: string, context?: string) {
    if (!this.shouldLog('debug')) return;
    const formatted = this.formatMessage('DEBUG', message, context);
    console.debug(`${this.getColorCode('DEBUG')}${formatted}${this.resetColor()}`);
  }

  verbose(message: string, context?: string) {
    if (!this.shouldLog('verbose')) return;
    const formatted = this.formatMessage('VERBOSE', message, context);
    console.log(`${this.getColorCode('VERBOSE')}${formatted}${this.resetColor()}`);
  }

  fatal(message: string, trace?: string, context?: string) {
    // Fatal is treated as error level
    if (!this.shouldLog('error')) return;
    const formatted = this.formatMessage('FATAL', message, context);
    console.error(`${this.getColorCode('FATAL')}${formatted}${this.resetColor()}`);
    if (trace) {
      console.error(`${this.getColorCode('FATAL')}${trace}${this.resetColor()}`);
    }
  }
}