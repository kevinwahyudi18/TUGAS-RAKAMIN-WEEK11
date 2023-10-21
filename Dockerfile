# Menggunakan gambar Node versi 18.17.1
FROM node:18.17.1

# Membuat direktori kerja dalam container
WORKDIR /usr/src/app

# Menyalin file package.json dan package-lock.json (jika ada) ke dalam direktori kerja container
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin seluruh file dan direktori lain ke dalam direktori kerja container
COPY . .

# Mengexpose port yang Anda gunakan di aplikasi Anda, misalnya port 3000
EXPOSE 3000

# Perintah untuk menjalankan aplikasi Anda saat container dijalankan
CMD [ "node", "app.js" ]