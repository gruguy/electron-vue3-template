const { app, BrowserWindow } = require("electron");
const path = require("path");

const NODE_ENV = process.env.NODE_ENV;

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.ts"),
    },
  });

  // 加载 idex.html
  console.log(NODE_ENV);
  mainWindow.loadURL(
    NODE_ENV === "development"
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../dist/index.html")}`
  );

  // 打开开发工具
  if (NODE_ENV === "development") {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 除了MacOs,所有窗口被关闭时退出程序
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
