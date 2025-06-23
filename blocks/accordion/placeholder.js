export async function loadTranslate(lang = 'en') {
    const placeholderData = 'https://main--eds-intro--oreshnyk.aem.live/placeholder.json';
    const resp = await fetch(placeholderData);
    if (!resp.ok) return {open: 'open', close: 'close'};
    const data = await resp.json();
    const row = data.find(r => r.key === lang);
    return {
        open: row.open,
        close: row.close,
    };
}