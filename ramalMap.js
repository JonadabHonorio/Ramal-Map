// Impotação dos Modulos
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Configuração do projeto
const firebaseConfig = {
  apiKey: "AIzaSyB12tw3xcVHwNagsNmNBfX4JqkGlPWwnaw",
  authDomain: "ramalmapdatabase.firebaseapp.com",
  projectId: "ramalmapdatabase",
};

// Inicializa Firebase e Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const input = document.getElementById('pesquisa');
const btn = document.getElementById('buscar');
const resultados = document.getElementById('resultados');

btn.addEventListener('click', async () => {
  resultados.innerHTML = '';

  const valor = input.value.trim();
  if (!valor) return;

  const busca = query(collection(db, "ramais"), where("Setor", "==", valor));
  const snapshot = await getDocs(busca);

  snapshot.forEach(doc => {
    const dado = doc.data();
    const li = document.createElement('li');
    li.textContent = `Setor: ${dado.Setor} — Ramal: ${dado.Ramal} — Unidade: ${dado.Unidade}`;
    resultados.appendChild(li);
  });
});