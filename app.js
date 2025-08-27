// Importamos Firebase desde el CDN de Google
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ⚠️ Reemplaza con la configuración de tu proyecto en Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Capturamos el formulario
const form = document.getElementById("formulario");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;

  try {
    await addDoc(collection(db, "usuarios"), {
      nombre: nombre,
      email: email,
      fecha: new Date()
    });
    alert("✅ Usuario registrado con éxito!");
    form.reset();
  } catch (error) {
    console.error("❌ Error al guardar:", error);
  }
});
