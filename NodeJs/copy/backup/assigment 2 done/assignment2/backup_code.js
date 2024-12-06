const displayPosts = (req, res) => {
    const postsHtml = user.map(({ name, createdAt, message }) => {
        return `
            <p>${name } - ${createdAt}</p> 
            <p>${message}</p>
                        <br>

        `;
    }).join(''); 
    res.send(`
        <html>
            <body>
                ${postsHtml}
            </body>
        </html>
    `);
};