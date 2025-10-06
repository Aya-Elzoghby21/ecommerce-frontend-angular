# 🛍️ E-Commerce Frontend (Angular)

This is the **frontend** of an E-Commerce web application built using **Angular 18** and connected to a **.NET Web API backend**.  
The app includes secure **JWT authentication**, **product listing with pagination**, and a clean, responsive UI.  

---

## 🚀 Features
- 🔐 **Login with JWT Authentication**
- 🧭 **Protected routes using AuthGuard**
- 🛒 **Product listing with pagination**
- 🎨 **Modern, responsive UI with shared Navbar & Footer**
- ⚡ **State management using RxJS BehaviorSubject**
- ✅ **Integration & E2E testing with Cypress**
- 🧱 **Clean architecture with core / shared / features structure**

---

## 🧠 Tech Stack
| Category | Technology |
|-----------|-------------|
| Frontend Framework | Angular 18 |
| Language | TypeScript |
| State Management | RxJS |
| Styling | SCSS |
| Testing | Cypress |
| Build Tool | Angular CLI |

---

## 📁 Project Structure

src/
┣ app/
┃ ┣ core/
┃ ┃ ┣ models/
┃ ┃ ┃ ┣ auth.dto.ts
┃ ┃ ┃ ┗ product.model.ts
┃ ┃ ┣ services/
┃ ┃ ┃ ┣ auth.service.ts
┃ ┃ ┃ ┗ product.service.ts
┃ ┣ features/
┃ ┃ ┣ login/
┃ ┃ ┃ ┣ login.component.ts
┃ ┃ ┃ ┣ login.component.html
┃ ┃ ┃ ┗ login.component.scss
┃ ┃ ┣ products/
┃ ┃ ┃ ┣ products.component.ts
┃ ┃ ┃ ┣ products.component.html
┃ ┃ ┃ ┗ products.component.scss
┃ ┣ shared/
┃ ┃ ┣ navbar/
┃ ┃ ┃ ┗ navbar.component.ts
┃ ┃ ┣ footer/
┃ ┃ ┃ ┗ footer.component.ts
┣ environments/
┃ ┣ environment.ts
┃ ┗ environment.prod.ts
┣ assets/
┗ main.ts

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Aya-Elzoghby21/ecommerce-frontend-angular.git
cd ecommerce-frontend-angular
### 2️⃣ Install dependencies
npm install
### 3️⃣ Configure API URL
Edit your src/environments/environment.ts file to match your backend URL:
export const environment = {
  apiUrl: 'https://localhost:7188/api',
  production: false
};
### 4️⃣ Run the application
ng serve -o

### 🧪 Testing with Cypress
#### 1️⃣ Install Cypress
npm install cypress --save-dev

#### 2️⃣ Add scripts to package.json
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}

🧩 Example test file: cypress/e2e/login.spec.js
describe('Login -> Products flow', () => {
  it('logs in and loads products', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('input[formcontrolname="usernameOrEmail"]').type('aya22'); 
    cy.get('input[formcontrolname="password"]').type('Aya@123');
    cy.contains('Login').click();
    cy.url().should('include', '/products');
    cy.get('.products-grid .card').its('length').should('be.greaterThan', 0);
  });
});


To run the test:

npm run cypress:open

🧩 Example Features in the App
🔐 Login Page

Reactive form validation (required username & password)

Calls the API: POST /api/auth/login

Stores JWT in localStorage

Redirects to /products on success

🛒 Products Page

Fetches data from /api/Products

Displays product cards with name, image, price, and discount

Supports pagination

Includes a shared Navbar & Footer

Logout button clears JWT token

🧱 Architecture Overview

The project follows a clean modular structure inspired by feature-based architecture:

core/ → business logic, models, services

features/ → specific pages or modules (login, products)

shared/ → reusable UI components (navbar, footer)

environments/ → API URLs and configuration

👩‍💻 Author

Aya El-Zoghby
Full Stack Developer (.NET & Angular)
📧 ayaelzoghby651@gmail.com
