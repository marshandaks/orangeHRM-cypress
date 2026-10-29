describe('Login OrangeHRM', () => {

    it('TC-LGN-001 Login berhasil dengan akun valid', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type('Admin')
      cy.get('[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
      cy.url().should('include', '/dashboard')
    })
  
    it('TC-LGN-002 Login dengan password salah', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type('Admin')
      cy.get('[name="password"]').type('salah123')
      cy.get('button[type="submit"]').click()
      cy.contains('Invalid credentials').should('be.visible')
    })
  
    it('TC-LGN-003 Login dengan username salah', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type('AdminXYZ')
      cy.get('[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
      cy.contains('Invalid credentials').should('be.visible')
    })
  
    it('TC-LGN-004 Login dengan username dan password salah', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type('user123')
      cy.get('[name="password"]').type('pass123')
      cy.get('button[type="submit"]').click()
      cy.contains('Invalid credentials').should('be.visible')
    })
  
    it('TC-LGN-005 Login dengan kedua field kosong', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('button[type="submit"]').click()
      cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    })
  
    it('TC-LGN-006 Login dengan username kosong', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
      cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    })
  
    it('TC-LGN-007 Login dengan password kosong', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type('Admin')
      cy.get('button[type="submit"]').click()
      cy.get('.oxd-input-field-error-message').should('contain', 'Required')
    })
  
    it('TC-LGN-008 Login dengan username huruf kecil', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type('admin')
      cy.get('[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
      cy.contains('Invalid credentials').should('be.visible')
    })
  
    it('TC-LGN-009 Login dengan password huruf besar', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type('Admin')
      cy.get('[name="password"]').type('ADMIN123')
      cy.get('button[type="submit"]').click()
      cy.contains('Invalid credentials').should('be.visible')
    })
  
    it('TC-LGN-010 Memastikan password tersamarkan', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="password"]').type('admin123')
      cy.get('[name="password"]').should('have.attr', 'type', 'password')
    })
  
    it('TC-LGN-011 Login dengan karakter spesial', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('[name="username"]').type("' OR '1'='1")
      cy.get('[name="password"]').type("' OR '1'='1")
      cy.get('button[type="submit"]').click()
      cy.contains('Invalid credentials').should('be.visible')
    })
  
    it('TC-LGN-012 Fungsi link Forgot your password?', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.contains('Forgot your password?').click()
      cy.url().should('include', '/auth/requestPasswordResetCode')
      cy.get('[name="username"]').should('be.visible').type('Admin')
      cy.contains('Reset Password').should('be.visible').click()
    })
  
  })
  