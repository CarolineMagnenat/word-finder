const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

// Funktion för att hämta definitionen av ett ord från API
export async function fetchWordDefinition(word: string) {
  try {
    const response = await fetch(`${API_URL}${word}`)
    if (!response.ok) {
      throw new Error('Failed to fetch word definition')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
