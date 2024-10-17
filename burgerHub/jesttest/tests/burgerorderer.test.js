/**
 *
 * This file contains unit tests that mock the MySQL database interactions
 * to test the following functions:
 *
 * - `getBurger`: Retrieves a burger and its toppings from the database.
 * - `placeOrder`: Places a new burger order with selected toppings, sides, and drink.
 * - `getOrderId`: Retrieves the latest order ID from the database.
 *
 * All database calls are mocked to avoid using a live database.
 */

const mysql = require('mysql2/promise');
const burgerorderer = require('../../containers/burgerOrderer/burgerorderer.js');
jest.mock('mysql2/promise');

describe('burgerorderer tests', () => {
  let connection;

  beforeEach(() => {
    connection = {
      execute: jest.fn(),
      end: jest.fn(),
    };
    mysql.createConnection.mockResolvedValue(connection);
  });

  it('should retrieve a burger with its toppings', async () => {
    const mockBurger = [{ burger_name: 'McCaterpillar', toppings: 'lettuce, tomato, cheese' }];
    connection.execute.mockResolvedValue([mockBurger]);

    const burger = await burgerorderer.getBurger('McCaterpillar');

    expect(connection.execute).toHaveBeenCalledWith('SELECT * FROM MenuTb WHERE burger_name = ?', ['McCaterpillar']);
    expect(burger.burger_name).toBe('McCaterpillar');
    expect(burger.toppings).toEqual(['lettuce', 'tomato', 'cheese']);
  });

  it('should place an order successfully', async () => {
    connection.execute.mockResolvedValue([{ insertId: 1 }]);

    const result = await burgerorderer.placeOrder('McCaterpillar', ['lettuce', 'tomato'], 'Fries', 'Coke');

    expect(connection.execute).toHaveBeenCalledWith(
      'INSERT INTO OrdersTb (burger, toppings, sides, drink) VALUES (?, ?, ?, ?)',
      ['McCaterpillar', 'lettuce, tomato', 'Fries', 'Coke']
    );
    expect(result.insertId).toBe(1);
  });

  it('should return the latest order ID', async () => {
    const mockOrderId = [{ order_id: 10 }];
    connection.execute.mockResolvedValue([mockOrderId]);

    const result = await burgerorderer.getOrderId();

    expect(connection.execute).toHaveBeenCalledWith('SELECT order_id FROM OrdersTb ORDER BY order_id DESC LIMIT 1;');
    expect(result.order_id).toBe(10);
  });
});