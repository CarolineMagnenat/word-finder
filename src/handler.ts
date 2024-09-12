import { http, HttpResponse } from "msw";
import word from './mockWords.json'

export const handlers = [
  http.get('https://api.dictionaryapi.dev/api/v2/entries/en/test', () => {
    return HttpResponse.json(word)
  }),
  http.get('https://api.dictionaryapi.dev/api/v2/entries/en/aik', () => {
    return HttpResponse.json({"title":"No Definitions Found","message":"Sorry pal, we couldn't find definitions for the word you were looking for.","resolution":"You can try the search again at later time or head to the web instead."})
  })
]