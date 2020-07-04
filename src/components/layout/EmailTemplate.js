export const EmailTemplate = (email, firstname, title, message) => {
    return (
        `
        <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
        <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #222222;">
            <div style="max-height:0; overflow:hidden; mso-hide:all;" aria-hidden="true">
                Un nuevo contacto desde la página personal
            </div>
            <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
                &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            </div>
            <div style="max-width: 600px; margin: 50px auto;" class="email-container">
                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                    <tr>
                        <td style="background-color: #ffffff;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">
                                        <h1 style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 25px; line-height: 30px; color: #333333; font-weight: normal;">Un nuevo contacto desde la página personal</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">
                                        <h2 style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 18px; line-height: 22px; color: #333333; font-weight: bold;">${firstname}</h2>
                                        <ul style="padding: 0; margin: 0 0 10px 0; list-style-type: disc;">
                                            <li style="margin:0 0 10px 30px;" class="list-item-first">Correo: ${email}</li>
                                            <li style="margin:0 0 10px 30px;">${title}</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td aria-hidden="true" height="40" style="font-size: 0px; line-height: 0px;">
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: #ffffff;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">
                                        <p style="margin: 0;">${message}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td aria-hidden="true" height="100" style="font-size: 0px; line-height: 0px;">
                            &nbsp;
                        </td>
                    </tr>
                </table>
            </div>
        </center>
        </body>
        `
    );
}