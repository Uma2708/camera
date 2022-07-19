//connect to databse
let db;
let openRequest = indexedDB.open('myDatabase');
openRequest.addEventListener('sucess', () =>{
    console.log('db connected');
    db = openRequest.result;
})

openRequest.addEventListener('onupgradeneeded', () =>{
    console.log('db upgraded OR initalised db');
    db = openRequest.result;

    db.createObjectStore('video', { keyPath: "id" });
    db.createObjectStore("image", { keyPath: "id" });
});

openRequest.addEventListener("error", () => {
    console.log("db error");
});