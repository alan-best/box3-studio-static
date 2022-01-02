const _BUA_PACKAGES = [];
console.warn(
  "⚠️您似乎正在以传统方式运行代码，建议通过startScript的方式运行（参照HelloWorld示例），否则代码包可能无法正常运行。"
);
function startScript(scriptMain: any) {
  console.clear();
  _BUA_PACKAGES.forEach((p) => {
    Console.log(`已安装代码包:${p.label}(${p.id}) by ${p.author}`);
  });
  scriptMain.init();
}
class Package {
  id: string;
  label: string;
  author: string;
}
function _registerPackage(package: Package) {
  _BUA_PACKAGES.push(package);
}
class Console {
  static log(...msg: any) {
    console.log("• " + msg.map((v: any) => v.toString()).join(" "));
  }
}
