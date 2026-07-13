# 🛒 E-Commerce Web Application

A modern e-commerce web application built with **Angular 19** that allows users to browse products by category, view product details, manage their shopping cart, and complete the checkout process.

## 🌐 Live Demo

**Website:** https://resilient-chaja-fbdfb4.netlify.app/

---

## 📖 Overview

This project was developed to demonstrate frontend web development skills using Angular. Product data is retrieved dynamically from the Fake Store API, providing users with a responsive shopping experience.

---

## ✨ Features

- Browse products by category
- Electronics section
- Jewelry section
- Men's Clothing section
- Product details page
- Shopping cart using NgRx state management
- Billing/Checkout page
- Responsive user interface
- Dynamic data fetched from Fake Store API
- Expandable product descriptions

---

## 🛠 Technologies Used

- Angular 19
- TypeScript
- HTML5
- CSS3
- JavaScript
- NgRx
- Fake Store API
- Angular Router

---

## 📂 Project Structure

```
src/
│
├── app/
│   ├── home/
│   ├── header/
│   ├── electronics/
│   ├── jewelry/
│   ├── men-clothing/
│   ├── details/
│   ├── billing/
│   ├── app-routing.module.ts
│   └── state/
│       └── counter/
│           ├── counter.actions.ts
│           └── counter.reducer.ts
```

---

## 🚀 Main Functionality

### Product Categories

Products are loaded dynamically from the Fake Store API.

Available categories include:

- Electronics
- Jewelry
- Men's Clothing

---

### Product Details

Users can

- View product images
- Read product descriptions
- View pricing information
- Expand and collapse descriptions

---

### Shopping Cart

The application uses **NgRx** for state management.

Features include

- Add products to cart
- Remove products
- Update cart quantity
- Dynamic cart counter

---

### Billing

The billing page provides a simple checkout workflow where users can review their selected products before completing the purchase.

---

## 📡 API

This project uses the **Fake Store API**

https://fakestoreapi.com/

Example endpoint

```
https://fakestoreapi.com/products/category/jewelery
```

---

## 💻 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/ecommerce.git
```

Install dependencies

```bash
npm install
```

Run the application

```bash
ng serve
```

Open

```
http://localhost:4200
```

