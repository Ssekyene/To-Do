const STORAGE_KEY = "todo-app-data";

export function saveData(data) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function loadData() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return null;

  return JSON.parse(data);
}