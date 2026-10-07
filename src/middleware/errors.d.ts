export declare class NotFoundError extends Error {
    statusCode: number;
    constructor(message?: string);
}
export declare class ValidationError extends Error {
    statusCode: number;
    details?: unknown;
    constructor(message?: string, details?: unknown);
}
//# sourceMappingURL=errors.d.ts.map