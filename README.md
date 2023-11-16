
# Dokumentasi API

![App Screenshot](https://iili.io/JCbFWQa.png)

### Register User
Berfungsi untuk membuat akun user.

```http
  POST /auth/regis
```
##### Data dari password,username,email, dan adress akan tersimpan kedalam database online.

### Login User
Berfungsi untuk membuat akun user.

```http
  POST /auth/login
```
##### mengakses data dari database untuk login
##### mengambil data dari body
```http
  {
  "email": "youremail@gmail.com",
  "password": "yourpassword"
  }
```
### Get all data todo
##### Hanya bisa diakses ketika sudah login
```http
  GET /todos/
```
##### mengambil properti dari HTTP header
#####

| Parameter       | Value     |
| :--------       | :------- | 
| `Authorization` | `Bearer` yourlogintokenhere | 

##### Login token didapat dari token yang dikembalikan json saat login

### Menambah todo
```http
  POST /todos/addTodo
```
##### menambah todo melalui body
```http
  {
  "value" : "Makan bersama",
  "user_id" : 1
  }
```
### Mendapatkan todo berdasarkan Id
##### ganti `:id` dengan id todo yang diinginkan
```http
  GET /todos/:id
```
### Mendapatkan detail todo
##### ganti `:id` dengan id todo yang diinginkan

```http
  GET /todos/:id/detail
```
### Mendapatkan detail todo berdasarkan Id
##### ganti `:id` dengan id todo yang diinginkan
```http
  GET /todos/:id/detail
```
### Menngedit data todo
##### ganti `:id` dengan id todo yang diinginkan
```http
  PUT /todos/:id
```
##### mengedit data melalui body
```http
  "value" : "Makan bersama",
  "user_id" : 1
```
### Menghapus data berdasarkan id
##### ganti `:id` dengan id todo yang diinginkan
```http
  DELETE /todos/:id
```
### Menghapus semua data todo
```http
  DELETE /todos/
```