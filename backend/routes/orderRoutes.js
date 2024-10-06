import express from "express";
import {
  addOrderItems,
  getMyOrders,
  getMyOrderById,
  updateOrderToPaid,
  updateToDelivered,
  getOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);
router.route("/myOrders").get(protect, getMyOrders);
router.route("/:id").get(protect, getMyOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateToDelivered);

export default router;
