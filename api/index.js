export default function handler(req, res) {
  if (req.method === 'POST') {
    const uniqueId = `sashin-ia-${Math.random().toString(36).substring(2, 10)}`;
    return res.status(200).json({
      session: uniqueId,
      message: '♻️ SASHIN IA ✅'
    });
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
