import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const Subscriber = sequelize.define('Subscriber', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  subscribedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false, // Disabling automatic createdAt/updatedAt if not needed
});

export default Subscriber;
