import rateLimit from "express-rate-limiter";

export const limiter = rateLimit({
    windowMs: 15 * 60 *1000, // 15 mins
    max:100,
    standardHeaders:true,
    legactHeaders:false,
})