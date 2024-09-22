# Marketplace Management System

This project is a web-based marketplace management system that allows the creation and management of sellers (partners), their partners (merchants), and the products for each merchant. Users can add, edit, and view partners, merchants, and products. The project is built using React for the frontend, utilizing `react-router-dom` for navigation and `Context API` for state management.

## Features

- **Create Partners**: Users can add new partners to the marketplace.
- **Manage Partners**: Edit or delete existing partners.
- **Create Merchants**: Merchants can be added under a specific partner.
- **Manage Merchants**: Edit or delete merchants within a partner.
- **Add Products**: Add new products for each merchant.
- **Manage Products**: Edit or delete products under a specific merchant.

## Project Structure

The frontend of the application consists of several key components and pages that handle different functionalities related to partners and products:

### Main Components

- `Home.js`: Displays the homepage of the application with an overview.
- `AddPartner.js`: Form to add a new partner (seller).
- `EditPartner.js`: Edit details of an existing partner.
- `PartnerProducts.js`: Lists all products for a selected partner.
- `AddProduct.js`: Form to add a new product for a specific merchant.
- `EditProduct.js`: Edit details of an existing product.

### Routing

The app uses `react-router-dom` for routing between different views:

- `/`: Home page showing available options.
- `/add-partner`: Page to add a new partner.
- `/edit-partner/:name`: Edit an existing partner's details.
- `/partner/:partner/products`: List products for a specific partner.
- `/add-product/:partner`: Add a new product for a specific partner.
- `/edit-product/:partner/:id`: Edit an existing product for a specific partner.

### Context API

- `GlobalProvider`: Provides global state for managing partners and merchants.
- `ProductProvider`: Provides state management for products.

## Technologies Used

- **React**: The main library used to build the user interface.
- **React Router DOM**: For client-side routing and navigation.
- **Context API**: For state management across the app.
- **Bootstrap**: For responsive layout and design elements.
- **JavaScript (ES6+)**: The main programming language for the project.

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed on your machine:

- Node.js (v12+)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https
   ```

2.Navigate to the project directory:

```bash
cd marketplace-manager/frontend
Install dependencies:
```

```bash
npm install
Start the development server:
```
```bash
npm start
The app will now be running at http://localhost:3000.
```
### Future Enhancements
Authentication: Implementing user authentication for secure access.
Search and Filter: Adding functionality to search and filter through partners, merchants, and products.
API Integration: Connect the frontend to a backend API for data persistence and management.

### Contribution
Feel free to fork this project, open an issue, or submit a pull request if you'd like to contribute!

