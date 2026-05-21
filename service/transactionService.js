const Transaction = require('../models/transactionModel');

const transactionService = {
 
  getTransactions: async () => {
    try {
      const transactions = await Transaction.find();
      return transactions;
    } catch (error) {
      console.error('Error fetching transactions:', error);
      throw error;
    }
  },

  
  getTransactionById: async (id) => {
    try {
      const transaction = await Transaction.findById(id);

      if (!transaction) {
        throw new Error('Transaction not found');
      }

      return transaction;
    } catch (error) {
      console.error(`Error fetching transaction with ID ${id}:`, error);
      throw error;
    }
  },

  
  createTransaction: async (transactionData) => {
    try {
      const newTransaction = new Transaction(transactionData);
      const savedTransaction = await newTransaction.save();

      return savedTransaction;
    } catch (error) {
      console.error('Error creating transaction:', error);
      throw error;
    }
  },

  updateTransaction: async (id, updatedData) => {
    try {
      const updatedTransaction = await Transaction.findByIdAndUpdate(
        id,
        updatedData,
        { new: true, runValidators: true }
      );

      if (!updatedTransaction) {
        throw new Error('Transaction not found');
      }

      return updatedTransaction;
    } catch (error) {
      console.error(`Error updating transaction with ID ${id}:`, error);
      throw error;
    }
  },

 
  deleteTransaction: async (id) => {
    try {
      const deletedTransaction = await Transaction.findByIdAndDelete(id);

      if (!deletedTransaction) {
        throw new Error('Transaction not found');
      }

      return deletedTransaction;
    } catch (error) {
      console.error(`Error deleting transaction with ID ${id}:`, error);
      throw error;
    }
  }
};

module.exports = transactionService;











