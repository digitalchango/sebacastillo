export const addEmail = (data) => ({
    type: 'ADD_EMAIL',
    data: data
});
export const addClick = (data) => ({
    type: 'ADD_CLICK',
    data: data //recibe el id del elemento clickeado
});
export const recetInt = () => ({
    type: 'RESET_INT'
});