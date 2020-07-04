export const EmailTemplate = (email, firstname, title, message) => {
    return (
        `
        <h1>${firstname}</h1>
        <hr>
        <p>Correo: ${email}</p>
        <p>${title}</p>
        <p>${message}</p>
        `
    );
}