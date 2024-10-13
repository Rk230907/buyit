import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc create new order
// @route POST /api/orders
// @access private
const addOrderItems = asyncHandler(async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;
    if (orderItems && orderItems.length === 0) {
      res.status(400);
    } else {
      const order = new Order({
        orderItems: orderItems.map((x) => ({
          ...x,
          products: x._id,
          _id: undefined,
        })),
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });
      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  } catch (e) {
    console.error(e);
  }
});

// @desc Get loggedin users order
// @route GET /api/orders/myorders
// @access private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

// @desc Get order by id
// @route GET /api/orders/:id
// @access private
const getMyOrderById = asyncHandler(async (req, res) => {
  const orderByid = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (orderByid) {
    res.status(200).json(orderByid);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

// @desc Update order to paid
// @route PUT /api/orders/:id/pay
// @access private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      if: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updateOrder = await order.save();
    res.status(200).json(updateOrder);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

// @desc Update to delivered
// @route PUT /api/orders/:id/delivered
// @access admin
const updateToDelivered = asyncHandler(async (req, res) => {
  // res.send("Update order to delivered");
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const updateOrder = await order.save();
    res.status(200).json(updateOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc getAllOrder
// @route GET /api/orders
// @access admin
const getOrders = asyncHandler(async (req, res) => {
  // res.send("Get all orders");
  const orders = await Order.find({}).populate("user", "id name");
  res.status(200).json(orders);
});

export {
  addOrderItems,
  getMyOrders,
  getMyOrderById,
  updateOrderToPaid,
  updateToDelivered,
  getOrders,
};
