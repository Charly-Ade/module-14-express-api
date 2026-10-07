export class NotFoundError extends Error {
    statusCode = 404;
    constructor(message = "Resource not found") {
        super(message);
        this.name = "NotFoundError";
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
export class ValidationError extends Error {
    statusCode = 400;
    details;
    constructor(message = "Validation failed", details) {
        super(message);
        this.name = "ValidationError";
        this.details = details;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
//# sourceMappingURL=errors.js.map