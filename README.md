# Expense Tracker Web Application

## Introduction

This is a simple **Expense Tracker Web Application** that allows users to manage and track their daily expenses. The app enables the user to add, edit, and delete expenses, providing a summary of the expenses with visual charts. It also features a **Wallet Balance** that updates dynamically, and users are restricted from spending beyond their available balance.

The application ensures that expense data and wallet balance persist across page refreshes using **localStorage**.

### Key Features:
- **Wallet Balance:** Starts at ₹5000. Users can add income to the wallet.
- **Expense Management:** Users can add new expenses with details like title, amount, category, and date.
- **Transaction Limit:** Users cannot spend beyond their wallet balance. If they attempt to, an alert will be shown.
- **Expense Summary:** Displays a categorized summary of the total expenses.
- **Expense Trends:** A bar chart displays trending expenses by category.
- **Persistence:** Wallet balance and expenses are saved to `localStorage`, ensuring data persists even after a page refresh.
- **Responsive Design:** The app is fully responsive across different screen sizes.

## Technologies

- **Frontend:**
  - **React.js**
  - **HTML, CSS, JavaScript**
- **Libraries:**
  - **Recharts** for the pie chart and bar chart visualization.
  - **React Modal** for showing modals.
  - **React Icons** for displaying icons.
  - **Material-UI (MUI)** for icons and pagination controls.
  - **Notistack** for managing alerts.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Sai-Karthik9113/expense-tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd expense-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Navigate to `http://localhost:3000` to see the app in action.

## File Structure

   ```bash
   /expense-tracker
   /src
      /components
         /ExpenseChart
         /ExpenseList
         /TopContainer
         /AddExpenseForm
         /AddIncomeForm
      /helpers
         /ScreenSize.js
      /assets
      App.js
      index.js
      App.css
   public
      index.html
   package.json
   README.md
   ```

## Screenshot & GIFs

The following GIFs demonstrates key features of the Expense Tracker:

**Dashboard Overview:** Displays the current wallet balance and total expenses.

![Dashboard][dashboard]

**Expense List:** Users can add, edit, or delete expenses, ensuring they stay within their budget.

   - **Add Wallet Balance**

   ![Add Balance][add balance]

   - **Add Expense**

   ![Add Expense][add expense]

   - **Edit Expense**

   ![Edit Expense][edit expense]

**Expense Summary:** A pie chart summarizing expense categories for easy visualization.

![Pie Chart][pie chart]

**Expense Trends:** A bar chart displaying the trend of expenses categorized by type.

![Bar Chart][bar chart]

The GIF showcases how users can interact with the application to manage their finances smoothly and understand their spending trends.

## License

This project is licensed under the MIT License - see the LICENSE file for details.


[pie chart]: src/assets/gifs/image.png
[bar chart]: src/assets/gifs/20241222-1246-36.1845835_1.gif
[add balance]: src/assets/gifs/20241222-1229-47.8306619_1.gif
[add expense]: src/assets/gifs/20241222-1234-38.7220504_1.gif
[edit expense]: src/assets/gifs/20241222-1239-59.0995466_1.gif
[dashboard]: src/assets/gifs/20241222-1223-58.6857067_1_1.gif