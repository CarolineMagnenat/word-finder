import React from 'react'

//  Definierar props-typen för komponenten. Här förväntas ett meddelande som en sträng.
interface ErrorProps {
  message: string
}

// Komponent som visar ett felmeddelande. Texten visas i rött för att tydliggöra att det är ett fel.
const Error: React.FC<ErrorProps> = ({ message }) => {
  return <div style={{ color: 'red' }}>{message}</div>
}

export default Error
