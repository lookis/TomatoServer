/**
 * Created by Lookis on 02/05/2017.
 */
import DataType from 'sequelize';
import Model from '../sequelize';

const Order = Model.define('Order', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  count: DataType.INTEGER,
  state: DataType.STRING(16),
  price: DataType.INTEGER,
});

export default Order;
