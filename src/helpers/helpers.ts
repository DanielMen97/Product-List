export const formatPrice = (price: number) => price.toLocaleString('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0
}).replaceAll('.',',')