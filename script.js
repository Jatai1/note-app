let notes = [];
const saved = localStorage.getItem("notes");
if (saved) {
  notes = JSON.parse(saved);
}

const input = document.querySelector("#noteInput");
const add = document.querySelector("#addBtn");
const list = document.querySelector("#noteList");

function addNote() {
  if (input.value.trim() === "") {
    return;
  }

  const note = {
    id: Date.now(),
    text: input.value,
  };

  notes.push(note);
  saveNotes();

  renderNote(note);

  input.value = "";
}

add.addEventListener("click", addNote);

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNote(note) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = "Delete";
  button.addEventListener("click", () => {
    li.remove();
    notes = notes.filter((item) => item.id !== note.id);
    saveNotes();
  });
  li.textContent = note.text;
  list.appendChild(li);
  li.appendChild(button);
}

for (const note of notes) {
  renderNote(note);
}
