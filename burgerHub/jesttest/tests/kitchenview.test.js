/**
 *
 * This file contains unit tests that mock the MySQL database interactions
 * to test the following function:
 *
 * - `showOrders`: Fetches all orders placed from the database.
 *
 * All database calls are mocked to avoid using a live database.
 */

const mysql = require('mysql2/promise');
const kitchenview = require('../../containers/kitchenView/kitchenview.js');
jest.mock('mysql2/promise');

describe('kitchenview tests', () => {
  let connection;

  beforeEach(() => {
    connection = {
      execute: jest.fn(),
      end: jest.fn(),
    };
    mysql.createConnection.mockResolvedValue(connection);
  });

  it('should retrieve all orders from the database', async () => {
    const mockOrders = [
      { order_id: 1, burger: 'McCaterpillar', sides: 'Fries', drink: 'Coke' },
      { order_id: 2, burger: 'KrabbyPatty', sides: 'Mozzarella Sticks', drink: 'Fanta' },
    ];
    connection.execute.mockResolvedValue([mockOrders]);

    const orders = await kitchenview.showOrders();

    expect(connection.execute).toHaveBeenCalledWith('SELECT * FROM OrdersTb;');
    expect(orders).toHaveLength(2);
    expect(orders[0].burger).toBe('McCaterpillar');
    expect(orders[1].burger).toBe('KrabbyPatty');
  });
});