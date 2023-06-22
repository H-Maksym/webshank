export { default } from "next-auth/middleware";
export const config = { matcher: ["/profile", "/protected/:path*"] };

// INFO redirect auth routes and only route use middleware when selected in matcher. This file for one level with app or pages. With next v.13.4.4 - have error
