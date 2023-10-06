function expandedForm(nombre) {
  return nombre
    .toString()
    .split("")
    .map((chiffre, index, chiffres) =>
      chiffre !== "0" ? chiffre + "0".repeat(chiffres.length - index - 1) : null
    )
    .filter((chiffre) => chiffre !== null)
    .join(" + ");
}

console.log(expandedForm(70304));
console.log(expandedForm(1037903));
console.log(expandedForm(802539));
