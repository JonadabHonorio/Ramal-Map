# RamalMap
# Projeto Integrador Transdiciplinar em Engenharia de Software II
# 🔎 Sistema de Pesquisa de Ramais

Este projeto tem como objetivo facilitar a **busca e consulta de ramais internos** de uma empresa do segmento da **saúde**, proporcionando uma interface simples, rápida e acessível para colaboradores e setores administrativos.

---

## 🏥 Contexto e Motivação

Em muitas instituições de saúde, os **ramais telefônicos** dos diversos setores estão dispersos em planilhas, murais físicos ou arquivos compartilhados, dificultando a localização de contatos internos.  
O **Sistema de Pesquisa de Ramais** surge para **centralizar essas informações** em uma interface web intuitiva, permitindo que qualquer colaborador encontre rapidamente o número do setor desejado.

Com isso, o sistema:
- Reduz o tempo gasto em consultas manuais;
- Evita erros de digitação ou ramais desatualizados;
- Melhora a comunicação interna;
- E facilita a atualização centralizada das informações.

---

## ⚙️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|-------------|-------------|
| **HTML5** | Estrutura da aplicação web |
| **CSS3** | Estilização da interface  |
| **JavaScript** | Lógica da aplicação e integração com o banco de dados |
| **Firebase Firestore** | Banco de dados em nuvem utilizado para armazenar os ramais |

---

## 💡 Funcionalidades

- 🔍 **Pesquisa por Setor:** O usuário digita o nome do setor (ex.: `T.I`) e o sistema retorna o ramal e unidade correspondente.  
- 🗂️ **Armazenamento no Firestore:** Todos os dados de ramais são salvos em uma coleção `ramais` no Firebase.  
- ⚡ **Busca em tempo real (instantânea):** A consulta é feita diretamente ao banco de dados em nuvem.  
- 🖥️ **Interface moderna e responsiva:** Design limpo, centralizado e adaptado para desktop e dispositivos móveis.  

---


