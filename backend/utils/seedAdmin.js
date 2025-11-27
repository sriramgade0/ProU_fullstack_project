require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const connectDB = require('../config/database');

const seedAdmin = async () => {
  try {
    await connectDB();

    await User.deleteMany({ username: { $in: ['sriram', 'admin'] } });
    console.log('Removed old admin users if any existed');

    const admin = await User.create({
      username: 'admin',
      password: '12345670',
      name: 'Administrator',
      email: 'admin@admin.com',
      role: 'admin',
      isActive: true,
    });

    console.log('Admin user created successfully!');
    console.log('Username: admin');
    console.log('Password: 12345670');
    console.log('Role: admin');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();
