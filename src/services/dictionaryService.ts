const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export async function fetchWordDefinition(word: string) {
  try {
    const response = await fetch(`${API_URL}${word}`);
    if (!response.ok) {
      throw new Error('Failed to fetch word definition');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}