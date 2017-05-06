/**
 * Created by Lookis on 02/05/2017.
 */
import DataType from 'sequelize';
import Model from '../sequelize';

const Membership = Model.define('Membership', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },
  due: DataType.DATE,
});

export default Membership;
