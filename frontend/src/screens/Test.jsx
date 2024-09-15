import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Nav,
  Accordion,
  Table,
  Badge,
} from "react-bootstrap";
// import "./Test.css"; // Custom CSS for additional styling
import { FaPlus } from "react-icons/fa";
import {
  FaPlusCircle,
  FaArrowRigh,
  FaCreditCard,
  FaArrowRight,
} from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Test() {
  const customer = {
    id: "C123456",
    address: "No 8, Basant Sharma's House, Red palace, Delhi, 234321",
    phone: "+91 7435910696",
    name: "Mr. Basant Sharma",
  };
  const billInfo = {
    billDate: "15 Sep 2024",
    billAmount: "12,345",
    collectAmount: "10,000",
  };

  const subscriptions = [
    {
      type: "Postpaid",
      plan: "Unlimited 100GB",
      details: "Unlimited calls, 100GB data, Free Netflix subscription",
      mobileOrLandline: "Mobile",
      activationDate: "2023-01-15",
      status: "Active",
    },
    {
      type: "Prepaid",
      plan: "50GB per month",
      details: "Limited calls, 50GB data",
      mobileOrLandline: "Landline",
      activationDate: "2022-11-10",
      status: "Expired",
    },
    // Add more subscriptions as needed
  ];

  const items = [
    {
      title: "123456711111111",
      date: "01 Sep 2024",
      amount: "1,000",
      status: "Paid",
    },
    {
      title: "123456711111111",
      date: "10 Sep 2024",
      amount: "2,500",
      status: "Unpaid",
    },
    {
      title: "123456711111111",
      date: "15 Sep 2024",
      amount: "3,000",
      status: "Paid",
    },
    {
      title: "123456711111111",
      date: "01 Sep 2024",
      amount: "1,000",
      status: "Paid",
    },
  ];

  const orders = [
    {
      title: "Applied for pan card registration",
      date: "01 Sep 2024",
      status: "Closed",
    },
    { title: "Order #67890", date: "10 Sep 2024", status: "Open" },
    { title: "Order #11223", date: "15 Sep 2024", status: "Closed" },
  ];
  const tickets = [
    { summary: "Issue with login", createdAt: "01 Sep 2024", status: "Open" },
    { summary: "Payment error", createdAt: "05 Sep 2024", status: "Closed" },
    { summary: "Feature request", createdAt: "10 Sep 2024", status: "Open" },
  ];

  return (
    <>
      <Row style={{ marginLeft: "20px" }}>
        <Col md={4} className="mx-3">
          <Row>
            <Card
              style={{
                width: "100%",
                marginBottom: "20px",
                padding: "10px",
                borderRadius: "20px",
                backgroundColor: "lightgrey",
              }}
            >
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      maxWidth: "50%",
                    }}
                  >
                    <h6>C123456</h6>
                    <p style={{ maxWidth: "90%" }}>
                      No 8, Basant Sharma's House, Red palace, Delhi, 234321
                    </p>
                    <span>+91 7435910696</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: "80%",
                      }}
                    >
                      <strong>
                        Mr. Basant Sharma Leading Delivery Hoorah Hoorah Hoorah
                      </strong>
                      <span>+91 7435910696</span>
                    </div>
                    <div>
                      <FaPlusCircle fontSize="2rem" />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Accordion defaultActiveKey="0" style={{ marginBottom: "20px" }}>
              {subscriptions.map((subscription, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        <strong>Subscription {index + 1}</strong>
                      </span>
                      <span>{subscription.type}</span>
                      <span>{subscription.plan}</span>
                      <span>{subscription.mobileOrLandline}</span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Plan Details:</strong> {subscription.details}
                    </p>
                    <p>
                      <strong>Mobile/Landline:</strong>{" "}
                      {subscription.mobileOrLandline}
                    </p>
                    <p>
                      <strong>Activation Date:</strong>{" "}
                      {subscription.activationDate}
                    </p>
                    <p>
                      <strong>Service Status:</strong> {subscription.status}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Row>
        </Col>

        {/* Second Column (Replicated) */}
        <Col md={4} className="mx-3">
          <Row>
            <Card
              style={{
                width: "100%",
                padding: "20px",
                borderRadius: "15px",
                backgroundColor: "#f8f9fa", // Light background
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
                marginBottom: "20px",
              }}
            >
              <Card.Body>
                <Card.Title>Bills and Invoices</Card.Title>
                <ListGroup variant="flush">
                  {items.map((item, index) => (
                    <ListGroup.Item
                      key={index}
                      style={{
                        backgroundColor: "transparent", // Make background transparent
                        borderBottom: "1px solid #dee2e6", // Bottom border for each item
                        padding: "10px 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between", // Distribute space equally
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{ flex: 4, textAlign: "left", minWidth: "0" }}
                      >
                        {/* Invoice Number and Date */}
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <strong
                            style={{ display: "block", marginBottom: "5px" }}
                          >
                            {item.title}
                          </strong>
                          <span style={{ color: "#6c757d" }}>{item.date}</span>
                        </div>
                      </div>
                      <div style={{ flex: 2, textAlign: "left" }}>
                        {/* Status Column */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            textAlign: "left",
                          }}
                        >
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              borderRadius: "50%",
                              backgroundColor:
                                item.status === "Paid" ? "green" : "red",
                              marginRight: "5px",
                            }}
                          ></div>
                          <span>{item.status}</span>
                        </div>
                      </div>
                      <div style={{ flex: 1, textAlign: "left" }}>
                        {/* Amount */}
                        <strong>₹{item.amount}</strong>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        {/* Right Arrow Icon */}
                        <IoIosArrowForward
                          size="1.2rem"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card
              style={{
                borderRadius: "15px",
                backgroundColor: "#f8f9fa", // Light background
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
                marginBottom: "20px",
              }}
            >
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <div style={{ marginBottom: "10px" }}>
                      <h6 style={{ color: "#6c757d" }}>Bill Date</h6>
                      <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                        {billInfo.billDate}
                      </p>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <h6 style={{ color: "#6c757d" }}>Bill Amount</h6>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "1.1rem",
                          color: "#dc3545",
                        }}
                      >
                        ₹{billInfo.billAmount}
                      </p>
                    </div>
                  </Col>

                  {/* Collect Amount and Action Buttons */}
                  <Col md={6} style={{ textAlign: "right" }}>
                    <div style={{ marginTop: "20px" }}>
                      <Button
                        variant="primary"
                        style={{
                          borderRadius: "50%",
                          marginRight: "10px", // Space between buttons
                        }}
                      >
                        <FaDownload size="1.5rem" />
                      </Button>
                      <Button
                        variant="success"
                        style={{
                          borderRadius: "50%",
                        }}
                      >
                        <FaCreditCard size="1.5rem" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Col>

        <Col md={3} className="mx-3">
          <Row>
            <Card
              style={{
                width: "100%",
                padding: "20px",
                borderRadius: "15px",
                backgroundColor: "#f8f9fa", // Light background
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
                marginBottom: "20px",
              }}
            >
              <Card.Body>
                <Card.Title>Order History</Card.Title>
                <ListGroup variant="flush">
                  {orders.map((order, index) => (
                    <ListGroup.Item
                      key={index}
                      style={{
                        backgroundColor: "transparent", // Make background transparent
                        borderBottom: "1px solid #dee2e6", // Bottom border for each item
                        padding: "10px 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between", // Space out items
                      }}
                    >
                      <div style={{ textAlign: "left", flex: 2 }}>
                        {/* Title and Date */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <strong
                            style={{ display: "block", marginBottom: "5px" }}
                          >
                            {order.title}
                          </strong>
                          <span style={{ color: "#6c757d" }}>{order.date}</span>
                        </div>
                      </div>
                      <div style={{ textAlign: "right", flex: 1 }}>
                        {/* Status Dot */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start", // Align status to the right
                          }}
                        >
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor:
                                order.status === "Closed" ? "green" : "red",
                              marginRight: "10px",
                            }}
                          ></div>
                          <span>{order.status}</span>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card
              style={{
                borderRadius: "15px",
                backgroundColor: "#f8f9fa",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Body>
                <Card.Title style={{ marginBottom: "20px" }}>
                  Tickets
                </Card.Title>
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Summary</th>
                      <th>Created</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((ticket, index) => (
                      <tr key={index}>
                        <td>{ticket.summary}</td>
                        <td>{ticket.createdAt}</td>
                        <td>
                          <Badge
                            bg={
                              ticket.status === "Closed" ? "success" : "danger"
                            }
                            text="white"
                            style={{ fontWeight: "bold" }}
                          >
                            {ticket.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Row>
          <Row></Row>
        </Col>
      </Row>
    </>
  );
}

export default Test;
