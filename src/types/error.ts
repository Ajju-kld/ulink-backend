
export interface Customerror extends Error {
    statusCode?: number;
    message: string;
}