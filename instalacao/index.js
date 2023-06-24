const { app, BrowserWindow } = require("electron")

//função que cria a janela
const createWindow = () => {
    //Objeto com a nova janela
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    //carrega o arquivo html em uma janela
    win.loadFile("index.html")
}

// as janelas só sao criadas após o modulo APP Disparar o evento ready.
app.whenReady().then(() => {
    createWindow();
})