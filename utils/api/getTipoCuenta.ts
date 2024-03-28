export function getTipoCuenta(type: number) {
  switch (type) {
    case 1:
      return "Cuenta corriente";
    case 2:
      return "Cuenta de ahorro";
    case 3:
      return "Cuenta de inversión";
    default:
      return "Desconocido";
  }
}
