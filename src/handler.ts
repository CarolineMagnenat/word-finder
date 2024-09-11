import { http, HttpResponse } from "msw";
import word from './mockWords.json'

export const handlers = [
  http.get('https://api.dictionaryapi.dev/api/v2/entries/en/test', () => {
    return HttpResponse.json(word)
  })
]