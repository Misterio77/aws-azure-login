"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIError = void 0;
class CLIError extends Error {
    constructor(message) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message;
    }
}
exports.CLIError = CLIError;
