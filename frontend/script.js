const api = "http://127.0.0.1:8000/books";

let editingId = null; // ID do livro que está sendo editado

async function load() {
  let r = await fetch(api);
  let d = await r.json();
  list.innerHTML = "";

  d.forEach((b) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <strong>${b.title}</strong> — ${b.author} (${b.year}) [${b.category}]
      <br>
      <button class="edit" onclick="editBook(${b.id})">Editar</button>
      <button class="delete" onclick="deleteBook(${b.id})">Excluir</button>
    `;

    list.appendChild(li);
  });
}

async function deleteBook(id) {
  await fetch(`${api}/${id}`, { method: "DELETE" });
  load();
}

function editBook(id) {
  editingId = id;
  fetch(`${api}/${id}`)
    .then((r) => r.json())
    .then((b) => {
      title.value = b.title;
      author.value = b.author;
      year.value = b.year;
      category.value = b.category;

      btn.innerText = "Atualizar Livro";
    });
}

f.onsubmit = async (e) => {
  e.preventDefault();

  const payload = {
    title: title.value,
    author: author.value,
    year: parseInt(year.value),
    category: category.value,
  };

  if (editingId !== null) {
    await fetch(`${api}/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    editingId = null;
    btn.innerText = "Adicionar Livro";

  } else {
    await fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  f.reset();
  title.focus();

  load();
};

load();
