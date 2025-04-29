// pages/index.js import { useState } from 'react';

export default function Home() { const [loading, setLoading] = useState(false); const [authCode, setAuthCode] = useState(null); const [copied, setCopied] = useState(false);

const getCode = async () => { setLoading(true); setCopied(false); try { const res = await fetch('/api/getAuthorizationCode'); const data = await res.json(); setAuthCode(data.ref); } catch (err) { console.error(err); setAuthCode('Erreur lors de la récupération du code'); } finally { setLoading(false); } };

return ( <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"> <h1 className="text-2xl font-bold mb-4">Connexion à WhatsApp via SASHIN IA</h1> <button
onClick={getCode}
className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700"
> Générer le code de liaison </button> {loading && <p className="mt-4 text-gray-600">Chargement...</p>} {authCode && ( <div className="mt-6 text-center"> <p className="text-lg font-semibold">Code de liaison :</p> <p className="text-xl font-mono bg-white px-4 py-2 mt-2 border rounded inline-block"> {authCode} </p> <button onClick={() => { navigator.clipboard.writeText(authCode); setCopied(true); }} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" > Copier </button> {copied && <p className="text-green-600 mt-2">Copié dans le presse-papiers !</p>} </div> )} </div> ); }

  
