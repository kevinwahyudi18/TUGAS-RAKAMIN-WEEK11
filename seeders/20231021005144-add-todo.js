'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Todos',[
    {
      title:'Belajar coding',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:'Olahraga',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:'Jalan-jalan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:'Pergi Makan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Todos', null, {})
  }
};
