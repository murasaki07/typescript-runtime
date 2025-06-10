/**
 * TypeScript Runtime Environment
 * メインエントリーポイント
 */

export class App {
  private name: string;

  constructor(name: string = 'TypeScript Runtime') {
    this.name = name;
  }

  public start(): void {
    console.log(`${this.name} が開始されました`);
    console.log(`Node.js バージョン: ${process.version}`);
    console.log(`実行時刻: ${new Date().toISOString()}`);
  }

  public getName(): string {
    return this.name;
  }
}

// メイン実行部分
if (require.main === module) {
  const app = new App();
  app.start();
} 