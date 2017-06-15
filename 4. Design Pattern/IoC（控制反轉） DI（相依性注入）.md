# IoC（控制反轉） DI（相依性注入）

## IoC

Inversion Of Control（控制翻轉）的縮寫。

## 過往 new class 的作法

我們寫了一支方法，而這一支方法（Write(string text)）的功能非常簡單，就是把傳入的參數輸出到console：

```java
class Program
{
    static void Main(string[] args)
    {
        ConsoleOutput output = new ConsoleOutput();
        output.Write("Hello World");
    }
}
 
class ConsoleOutput
{
    public void Write(string text)
    {
        Console.WriteLine(text);
    }
}
```

有一天有個使用者和你反應：「這個輸出能不能輸出到Text檔案裡面啊？」

身為一個厲害的工程師，這個當然沒有問題，馬上幫他寫出另外一個版本是輸出到Text檔案：

```java
class Program
{
    static void Main(string[] args)
    {
        // ConsoleOutput output = new ConsoleOutput();
        TextOutput output = new TextOutput();
        output.Write("Hello World");
    }
}
 
// ConsoleOutput 和之前一樣..
class ConsoleOutput
{
    public void Write(string text)
    {
        Console.WriteLine(text);
    }
}

// 新寫一個 TextOutput
class TextOutput
{
    public void Write(string text)
    {
        File.WriteAllText("Filex.txt", text);
    }
}
```

到目前為止，其實已經暴露出好的Design需要避免的問題：

loose coupling 原則

主要的程式非常依賴（Depend）實際的class，這導致了：

當輸出到不同目的地的時候，開發者需要重新編譯整個程式碼，甚至連呼叫的地方都需要重新修改，當程式碼和邏輯不複雜的時候問題不大，但是當程式變大的時候 這其實是很麻煩的一件事情。這違反了OO裡面常說的loose coupling的原則。

## Interface 

我們可以想像，世界上面那麼多的廠商都在做HD，我們怎麼能夠保證廠商 A和廠商 B的HD都能夠在我電腦上面使用呢？靠的就是每一家廠商的HD都會依照開出來的Interface（介面）去做產品。因此，只要你的電腦有 SATA（interface），就可以讀的到SATA的HD。

同樣道理用在軟體上面，我管你是如何實作（管你是哪家生產的廠商），只要最後你的結果是有Write（HD能夠和SATA接上）的Class就好。這樣我們就可以彈性話的切換我們想要的實作。

因此，我們的程式碼變成：

```java
interface IWriter
{
    void Write(string text);
}
 
class TextOutput : IWriter
{
    public void Write(string text)
    {
        File.WriteAllText("Filex.txt", text);
    }
}
 
class ConsoleOutput : IWriter
{
    public void Write(string text)
    {
        Console.WriteLine(text);
    }
}
```

因為我們現在完全把_實作_和_功能_拆出來了，我們可以動態的讓使用者選擇輸出方式：

```java
static void Main(string[] args)
{
    IWriter output;
 
    // 使用者選擇要用檔案輸出還是Console輸出
    if (args.Count() > 0 && args[0] == "text")
    {
        output = new TextOutput();
    }
    else
    {
        output = new ConsoleOutput();
    }
 
    output.Write("Hello World");
}
```

## 回來看IoC的概念

看完了傳統的、沒有彈性的寫法和用了Interface的寫法對比，應該會感覺到其實這兩個流程是不太一樣：

- 傳統、沒有彈性的寫法在
  *定義（Declare）_參數的瞬間就_已經決定了_這個參數的具體使用方式。因此和一般的程式flow是一樣的，_重上到下*
- 使用interface的寫法，是在
  *實例（也就是new()）_的時候才決定具體的使用方法。因此它的flow是到要用的時候才會new，所以是_依照* 後面要什麼來控制的。

這時候我們在想想IoC的意思是控制翻轉，就能夠大概瞭解意思了。傳統的方法屬於_重上到下_，而interface則是由new()他的類別來決定實作，因此控制的流程翻轉了。（不再是重上到下了）

因此，IoC在框架裡面非常重要，因為透過interface把功能抽離，我們的框架才能夠使用IoC的方式來決定什麼的實作（也就是實際的方法）是我們框架要的。

## DI

我們從上面IoC看到了，利用interface的方式，可以再使用的時候在決定要使用的實作是那一個。這時候，我們下一個問題是，那決定實作的時刻是如何使用的呢？

這個時候我們又有一個新的名詞，就是Dependency Injection（相依性注入）。

基本上，這邊會介紹的DI只有透過你Constructor和Property的這兩種方式。為了這兩種方法的介紹，我們把程式碼在包一層（之前是直接寫在Main裡面），所以假設我們有一個library class，他依賴一個IWriter的物件。

```
// 此class 會用到IWriter
public class LibraryWrapper
{
// ....
}

```

## Constructor injection

這個的意思是透過建構子來注入依賴的物件：

```java
// 此class 會用到IWriter
public class LibraryWrapper
{
    private IWriter _writer;
    // 透過建構子注入相依的物件
    public LibraryWrapper(IWriter inWriter)
    {
        _writer = inWriter;
    }
}
 
.....
// 使用上就是
 
LibraryWrapper output;
 
// 使用者選擇要用檔案輸出還是Console輸出
if (args.Count() > 0 && args[0] == "text")
{
    output = new LibraryWrapper (new TextOutput());
}
else
{
    output = new LibraryWrapper (new ConsoleOutput());
}
...
```

## Property injection

相較於建構子的時候注入，這種類型是透過property來注入：

```java
// 此class 會用到IWriter
public class LibraryWrapper
{
    public IWriter Writer { get; set; }
}
 
.....
// 使用上就是
 
LibraryWrapper output;
 
// 使用者選擇要用檔案輸出還是Console輸出
if (args.Count() > 0 && args[0] == "text")
{
    output = new LibraryWrapper ();
    output.Writer = new TextOutput();
}
else
{
    output = new LibraryWrapper ();
    output.Writer = new ConsoleOutput();
}
...
```