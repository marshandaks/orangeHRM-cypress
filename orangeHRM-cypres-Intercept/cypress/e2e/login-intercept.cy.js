
describe('Login OrangeHRM dengan intercept', () => {

    it('TC-LGN-001 Login berhasil dengan akun valid', () => {
      cy.intercept('GET', '**/api/v2/dashboard/employees/locations').as('locations');
  
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('[name="username"]').type('Admin');
      cy.get('[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/dashboard');
      cy.wait('@locations').its('response.statusCode').should('eq', 200);
    });
  
    it('TC-LGN-002 Login dengan password salah', () => {
      cy.intercept('POST', '**/auth/validate').as('login');
  
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('[name="username"]').type('Admin');
      cy.get('[name="password"]').type('salah123');
      cy.get('button[type="submit"]').click();
  
      cy.wait('@login');
      cy.contains('Invalid credentials').should('be.visible');
    });
  
  });
  