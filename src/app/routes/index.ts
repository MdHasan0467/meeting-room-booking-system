import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { RoomRoute } from "../modules/room/room.route";

const router = Router();

const moduleRoutes = [
    {
        path: "/auth",
        route: UserRoutes
    },
    {
        path: "/auth",
        route: AuthRoutes
    },
    {
        path: "/rooms",
        route: RoomRoute
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;