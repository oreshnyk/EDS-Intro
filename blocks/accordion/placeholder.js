export async function loadTranslate(lang = 'en') {
  const placeholderData = 'https://main--eds-intro--oreshnyk.aem.page/placeholder.json';

  try {
    const resp = await fetch(placeholderData);

    if (!resp.ok) {
      console.error(`Failed to fetch: ${resp.statusText}`);
      return { open: 'open', close: 'close' };
    }
    

    const json = await resp.json();
    console.log('Full JSON:', JSON.stringify(json, null, 2));

    if (!json.data || !Array.isArray(json.data)) {
      console.error('Malformed response: "data" is missing or not an array');
      return { open: 'open', close: 'close' };
    }

    const row = json.data.find(entry => entry.key === lang);

    if (!row) {
      console.warn(`Language "${lang}" not found in data`);
      return { open: 'open', close: 'close' };
    }

    return {
      open: row.open || 'open',
      close: row.close || 'close',
    };

  } catch (err) {
    console.error('Error loading translation:', err);
    return { open: 'open', close: 'close' };
  }
}
