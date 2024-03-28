export function getTimeGreetings() {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12) {
    return "Buenos días";
  }
  if (hours < 18) {
    return "Buenas tardes";
  }
  return "Buenas noches";
}
