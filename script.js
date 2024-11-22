// Data pengguna yang valid (untuk contoh sederhana)
const validUsers = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'password1' }
];

// Fungsi untuk login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(username)
    const user = validUsers.find(u => u.username === username && u.password === password);

    if (user) {
        // Menyimpan data pengguna ke localStorage
        localStorage.setItem('user', JSON.stringify(user));

        // Arahkan ke index.html setelah login berhasil
        window.location.href = 'index.html';
    } else {
        // Tampilkan pesan error jika login gagal
        document.getElementById('error-message').style.display = 'block';
    }
});

// Mengecek apakah pengguna sudah login (untuk halaman index)
if (window.location.pathname === '/index.html') {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        window.location.href = 'login.html'; // Arahkan ke halaman login jika tidak ada user
    }
}
