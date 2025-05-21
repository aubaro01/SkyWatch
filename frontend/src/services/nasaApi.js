const BASE_URL = `${process.env.REACT_APP_SERVER_URL}/apod`;

export async function fetchApodData() {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Erro ao buscar dados do backend');
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}
