export default async function handler(req, res) {
  const API_KEY = 'YOUR_API_KEY'; // вставь сюда свой токен Football-Data.org
  const url = 'https://api.football-data.org/v4/competitions/PL/matches?status=FINISHED&limit=5';

  try {
    const response = await fetch(url, {
      headers: { 'X-Auth-Token': API_KEY }
    });
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка на сервере', details: err.toString() });
  }
}
