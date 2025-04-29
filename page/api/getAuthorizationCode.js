export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const response = await fetch(
      'https://7105.api.greenapi.com/waInstance7105234722/getAuthorizationCode/952dd01ccbcb4c2da31f9406721f1328248d58c39ce4422683',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      }
    );

    const data = await response.json();

    if (data && data.authorizationCode) {
      return res.status(200).json({ code: data.authorizationCode });
    } else {
      return res.status(500).json({ error: 'Impossible de générer un code de liaison.' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Erreur serveur', details: error.message });
  }
}
