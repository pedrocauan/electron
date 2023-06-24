const { app, BrowserWindow } = require("electron")
const path = require("path")



//função que cria a janela
const createWindow = () => {
    //Objeto com a nova janela
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        //carrega preload
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })

    //carrega o arquivo html em uma janela
    win.loadFile("index.html")
}

// as janelas só sao criadas após o modulo APP Disparar o evento ready.
app.whenReady().then(() => {
    createWindow();

    //Cria janela no macos
    app.on("activate", () => {
        //abre a janela no macos
        if(BrowserWindow.getAllWindows.length === 0)
            createWindow()
    })
})

app.on("window-all-closed", () => {
    if(process.platform !== "darwin")
        app.quit()
})