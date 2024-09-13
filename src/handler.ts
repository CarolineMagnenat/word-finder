import { http, HttpResponse } from 'msw'
import word from './mockWords.json'


// Definiera MSW-hanterare för att simulera API-responser
export const handlers = [
  // Hanterare för GET-förfrågan till ett testord
  http.get('https://api.dictionaryapi.dev/api/v2/entries/en/test', () => {
    return HttpResponse.json(word)
  }),

  // Hanterare för GET-förfrågan till ett ord som inte finns
  http.get('https://api.dictionaryapi.dev/api/v2/entries/en/aik', () => {
    return HttpResponse.json({
      title: 'No Definitions Found',
      message:
        'Sorry pal, we couldnt find definitions for the word you were looking for.',
      resolution:
        'You can try the search again at later time or head to the web instead.',
    })
  }),
]
