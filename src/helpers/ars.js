export const formatCurrencyToARS = (amount) => {
    return Number(amount).toLocaleString('es-AR', { // Set locale to Spanish (Argentina)
        style: 'currency',
        currency: 'ARS', // Argentine Peso
    });
};
