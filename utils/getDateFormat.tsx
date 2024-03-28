import { format, parse } from "date-fns";
import { es } from "date-fns/locale";

export function getFechaFormateada(fecha: string) {
  const fechaParsed = parse(fecha, "yyyy-MM-dd", new Date());
  return format(fechaParsed, "MMMM dd", { locale: es });
}
