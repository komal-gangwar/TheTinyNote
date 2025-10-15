const API_URL = "http://localhost:5000/notes";

export const getNotes = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createNote = async (note) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return res.json();
};

export const updateNote = async (id, note) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return res.json();
};

export const deleteNote = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
