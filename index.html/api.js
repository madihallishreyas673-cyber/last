// Talks to the online database.
const READY = Boolean(SUPABASE_URL && SUPABASE_KEY);
async function rpc(name, args) {
  const headers = {'Content-Type':'application/json', apikey: SUPABASE_KEY.trim()};
  if (SUPABASE_KEY.trim().startsWith('eyJ')) headers.Authorization = 'Bearer ' + SUPABASE_KEY.trim();
  const base = SUPABASE_URL.trim().replace(/\/(rest\/v1\/?)?$/, '');
  const r = await fetch(base + '/rest/v1/rpc/' + name, {method:'POST', headers, body: JSON.stringify(args)});
  const d = await r.json().catch(() => null);
  if (!r.ok) { const e = new Error((d && d.message) || 'Database error'); e.code = d && d.code; throw e; }
  return d;
}
