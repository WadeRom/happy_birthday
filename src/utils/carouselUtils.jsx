export const getNextIndex = (index, length) => (index + 1) % length;
export const getPrevIndex = (index, length) => (index - 1 + length) % length;
export const formatContent = (content) => {
  const formattedStanzas = [];

  // Agrupar versos en estrofas de máximo 4 versos
  for (let i = 0; i < content.length; i += 4) {
      const stanza = content.slice(i, i + 4).join('\n');
      formattedStanzas.push(stanza);
  }

  // Devolver el poema formateado como una cadena de texto
  return formattedStanzas.join('\n\n'); 
  
}