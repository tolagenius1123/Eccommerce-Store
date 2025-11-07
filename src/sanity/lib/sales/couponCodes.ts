export const COUPON_CODES = {
	BFRIDAY: "BFRIDAY",
	NY2025: "NY2025",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
