function startScript(scriptMain: any) {
    console.clear();
    scriptMain.init();
}

class Console {
    static log(...msg: any) {
        console.log("• " + msg.map((v: any) => v.toString()).join(" "));
    }
}