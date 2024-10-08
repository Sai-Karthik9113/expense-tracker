
# Expense Tracker

## Description

The **Expense Tracker** is a web application designed to help users manage their personal finances by tracking expenses. Users can add, edit, and delete expenses, categorize them, and visualize their spending habits through charts. The app also helps users stay within a predefined balance, providing real-time updates on their available funds.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   ```

2. Navigate into the project directory:
   ```bash
   cd expense-tracker
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. The application will be available at:
   ```
   http://localhost:3000
   ```

## Usage

### Add an Expense

- To add an expense, click the **Add Expense** button.
- Fill in the form with the expense details such as title, price, category, and date.
- Submit the form to update your expense list and balance.

### Edit an Expense

- You can edit an existing expense by clicking the edit icon next to an expense.
- The form will appear pre-filled with the expense details, and you can modify any of the fields.
- Submit the updated details to save changes.

### View Expenses

- All expenses are displayed in a paginated list, showing the expense title, category, date, and price.
- You can navigate through the pages using the custom pagination buttons.

### Charts and Balance

- The **Bar Chart** and **Pie Chart** visualize your spending trends based on categories.
- The balance updates automatically as you add or edit expenses. If an expense exceeds the balance, a Snackbar message will notify you.

## Features

- Add, edit, and delete expenses
- Categorize expenses (Food, Entertainment, Travel)
- Track total balance and ensure expenses do not exceed it
- View spending trends through bar and pie charts
- Paginated list of expenses with custom icons
- Responsive layout for different screen sizes

## Technologies

- **React**: Frontend library for building user interfaces
- **Material UI**: For styled components and icons
- **CSS Modules**: For modular and scoped styles
- **Figma**: For design inspirations
- **localStorage**: For persistent balance and expense data

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push the changes to your forked repository:
   ```bash
   git push origin feature/my-feature
   ```
5. Open a Pull Request.

## License

MIT License

Copyright (c) 2024 Sai Shivak Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

This project was created as part of a student project at Crio. It is not an official project of Crio or affiliated with the institute in any formal capacity.
