
class halamanLogin {
    kunjungiHalaman() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    masukanUsername(username) {
        cy.get('[name="username"]').clear().type(username)
    }

    masukanPassword(password) {
        cy.get('[name="password"]').clear().type(password)
    }

    klikTombolLogin() {
        cy.get('button[type="submit"]').click()
    }

    verifikasiLoginBerhasil() {
        cy.url().should('include', '/dashboard')
    }

    verifikasiLoginGagal() {
        cy.get('.oxd-alert-content-text')
            .should('contain', 'Invalid credentials')
    }

    verifikasiFieldKosong() {
        cy.get('.oxd-input-field-error-message')
            .should('contain', 'Required')
    }

    verifikasiKeduaFieldKosong() {
        cy.get('.oxd-input-field-error-message')
            .should('have.length', 2)
    }

    verifikasiPasswordTersembunyi() {
        cy.get('[name="password"]')
            .should('have.attr', 'type', 'password')
    }

    klikForgotPassword() {
        cy.contains('Forgot your password?').click()
    }

    verifikasiHalamanForgotPassword() {
        cy.url().should('include', '/auth/requestPasswordResetCode')
    }

    masukanUsernameReset(username) {
        cy.get('[name="username"]').clear().type(username)
    }

    klikTombolResetPassword() {
        cy.get('button[type="submit"]').click()
    }
}

export default new halamanLogin()
