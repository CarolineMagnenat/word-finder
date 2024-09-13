export const isWordData = (data: unknown): data is WordData => {
  const wordData = data as WordData
  return (
    typeof wordData === 'object' &&
    wordData !== null &&
    typeof wordData.word === 'string' &&
    Array.isArray(wordData.phonetics) &&
    Array.isArray(wordData.meanings)
  )
}

export interface License {
  name: string
  url: string
}

export interface Phonetic {
  text?: string
  audio: string
  sourceUrl?: string
  license?: License
}

export interface Definition {
  definition: string
  synonyms: string[]
  antonyms: string[]
  example?: string
}

export interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: string[]
}

export interface WordData {
  word: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: License
  sourceUrls: string[]
}
