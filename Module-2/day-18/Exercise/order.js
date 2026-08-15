const orders = [
  {
    "orderId": "ORD-2026-001",
    "customerId": "CUST-9821",
    "customerName": "Alice Johnson",
    "orderDate": "2026-08-10T14:32:00Z",
    "status": "Delivered",
    "shippingAddress": {
      "street": "123 Maple Avenue",
      "city": "Seattle",
      "state": "WA",
      "zipCode": "98101",
      "country": "USA"
    },
    "items": [
      {
        "productId": "PROD-102",
        "name": "Wireless Ergonomic Keyboard",
        "quantity": 1,
        "price": 89.99
      },
      {
        "productId": "PROD-405",
        "name": "USB-C Multi-port Hub",
        "quantity": 2,
        "price": 24.50
      }
    ],
    "paymentDetails": {
      "method": "Credit Card",
      "transactionId": "TXN-773192",
      "isPaid": true
    },
    "financials": {
      "subtotal": 138.99,
      "tax": 11.12,
      "shippingCost": 0.00,
      "discount": 10.00,
      "total": 140.11
    }
  },
  {
    "orderId": "ORD-2026-002",
    "customerId": "CUST-4410",
    "customerName": "Michael Smith",
    "orderDate": "2026-08-12T09:15:00Z",
    "status": "Processing",
    "shippingAddress": {
      "street": "456 Oak Road",
      "city": "Austin",
      "state": "TX",
      "zipCode": "78701",
      "country": "USA"
    },
    "items": [
      {
        "productId": "PROD-889",
        "name": "Noise-Canceling Headphones",
        "quantity": 1,
        "price": 299.99
      }
    ],
    "paymentDetails": {
      "method": "PayPal",
      "transactionId": "TXN-884012",
      "isPaid": true
    },
    "financials": {
      "subtotal": 299.99,
      "tax": 24.00,
      "shippingCost": 5.99,
      "discount": 0.00,
      "total": 329.98
    }
  },
  {
    "orderId": "ORD-2026-003",
    "customerId": "CUST-1102",
    "customerName": "Emma Lin",
    "orderDate": "2026-08-14T08:00:00Z",
    "status": "Pending",
    "shippingAddress": {
      "street": "789 Pine Street",
      "city": "Boston",
      "state": "MA",
      "zipCode": "02108",
      "country": "USA"
    },
    "items": [
      {
        "productId": "PROD-213",
        "name": "Matte Screen Protector",
        "quantity": 3,
        "price": 12.99
      },
      {
        "productId": "PROD-054",
        "name": "Heavy Duty Phone Case",
        "quantity": 1,
        "price": 34.99
      }
    ],
    "paymentDetails": {
      "method": "Apple Pay",
      "transactionId": null,
      "isPaid": false
    },
    "financials": {
      "subtotal": 73.96,
      "tax": 5.92,
      "shippingCost": 3.99,
      "discount": 5.00,
      "total": 78.87
    }
  }
]


export default orders 