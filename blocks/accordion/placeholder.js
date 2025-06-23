export async function loadTranslate(lang = 'en') {
    const placeholderData = 'https://docs.google.com/spreadsheets/d/1chEVgHs7LRRCfYm0olzf2Tj_AzLuA1Y6AVz0hGlheJ8/edit?gid=0#gid=0';
    const resp = await fetch(placeholderData);
    if (!resp.ok) return {open: 'open', close: 'close'};
    const data = await resp.json();
    const row = data.find(r => r.key === lang);
    return {
        open: row.open,
        close: row.close,
    };
}