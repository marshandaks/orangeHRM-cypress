import halamanLogin from '../support/pageObjects/loginPage'
import loginData from '../fixtures/loginData.json'


describe('Scenario Verifikasi Fungsi Login OrangeHRM', () => {

    beforeEach(() => {
        halamanLogin.kunjungiHalaman()
    })

    it('TC001 - Login dengan username dan password valid', () => {
        halamanLogin.masukanUsername(loginData.usernameValid)
        halamanLogin.masukanPassword(loginData.passwordValid)
        halamanLogin.klikTombolLogin()
        halamanLogin.verifikasiLoginBerhasil()
    })

    it('TC002 - Login dengan username dan password invalid', () => {
        halamanLogin.masukanUsername(loginData.usernameInvalid)
        halamanLogin.masukanPassword(loginData.passwordInvalid)
        halamanLogin.klikTombolLogin()
        halamanLogin.verifikasiLoginGagal()
    })

    it('TC003 - Login dengan username valid dan password invalid', () => {
        halamanLogin.masukanUsername(loginData.usernameValid)
        halamanLogin.masukanPassword(loginData.passwordInvalid)
        halamanLogin.klikTombolLogin()
        halamanLogin.verifikasiLoginGagal()
    })

    it('TC004 - Login dengan username invalid dan password valid', () => {
        halamanLogin.masukanUsername(loginData.usernameInvalid)
        halamanLogin.masukanPassword(loginData.passwordValid)
        halamanLogin.klikTombolLogin()
        halamanLogin.verifikasiLoginGagal()
    })

    it('TC005 - Login dengan kedua field kosong', () => {
        halamanLogin.klikTombolLogin()
        halamanLogin.verifikasiKeduaFieldKosong()
    })

    it('TC006 - Login dengan username kosong', () => {
        halamanLogin.masukanPassword(loginData.passwordValid)
        halamanLogin.klikTombolLogin()
        halamanLogin.verifikasiFieldKosong()
    })

    it('TC007 - Login dengan password kosong', () => {
        halamanLogin.masukanUsername(loginData.usernameValid)
        halamanLogin.klikTombolLogin()
        halamanLogin.verifikasiFieldKosong()
    })

    it('TC008 - Login dengan username huruf kecil', () => {
        halamanLogin.masukanUsername(loginData.usernameHurufKecil)
        halamanLogin.masukanPassword(loginData.passwordValid)
        halamanLogin.klikTombolLogin()
        halamanLogin.verifikasiLoginGagal()
    })

    it('TC009 - Login dengan password huruf kapital', () => {
        halamanLogin.masukanUsername(loginData.usernameValid)
        halamanLogin.masukanPassword(loginData.passwordHurufKapital)
        halamanLogin.klikTombolLogin()
        halamanLogin.verifikasiLoginGagal()
    })

    it('TC010 - Memastikan password tersembunyi', () => {
        halamanLogin.masukanUsername(loginData.usernameValid)
        halamanLogin.verifikasiPasswordTersembunyi()
    })

    it('TC011 - Login menggunakan karakter khusus', () => {
        halamanLogin.masukanUsername(loginData.karakterKhusus)
        halamanLogin.masukanPassword(loginData.karakterKhusus)
        halamanLogin.klikTombolLogin()
        halamanLogin.verifikasiLoginGagal()
    })

    it('TC012 - Membuka halaman Forgot Password', () => {
        halamanLogin.klikForgotPassword()
        halamanLogin.verifikasiHalamanForgotPassword()
        halamanLogin.masukanUsernameReset(loginData.usernameValid)
        halamanLogin.klikTombolResetPassword()
    })

})
