const indexedDB = window.indexedDB;
console.log('hola');
if(indexedDB){
    let db
    const request = indexedDB.open('appPGN', 1);
    request.onsuccess = () => {
        db = request.result;
        console.log('OPEN', db);
    }

    request.onupgradeneeded = () => {
        db = request.result;
        console.log('CREATED', db);
        const dependencias = db.createObjectStore('dependencias');
        /* const dependencias = db.createObjectStore('dependencias'); */
    }

    request.onerror = (error) => {
        console.log('erro', error);
    }

}