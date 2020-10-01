export default function getSpecialAttacks({ special: [...specials] }) {
  const attacks = [];
  for (const attack of specials) {
    const attackCopy = { ...attack };
    if (!attackCopy.description) {
      attackCopy.description = 'Описание недоступно';
    }
    attacks.push(attackCopy);
  }
  return attacks;
}

// export default function getSpecialAttacks({ special: [...specials] }) {
//   const attacks = [];

//   for (const {
//     id, name, icon, description = 'Описание недоступно',
//   } of specials) {
//     attacks.push({
//       id, name, icon, description,
//     });
//   }

//   return attacks;
// }
