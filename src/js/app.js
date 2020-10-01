export default function getSpecialAttacks({ special }) {
  for (const attack of special) {
    if (!attack.description) {
      attack.description = 'Описание недоступно';
    }
  }
  return special;
}
