// 変数の初期化　変数の宣言
let untyped ='';
// 入力済み文字列を入れる変数（ここではtypedという名前にする）を準備する
let typed='';
// 変数「score」を宣言して、初期値として「0」を代入
let score = 0;

// 必要なHTML要素の取得
const untypedfield = document.getElementById('untyped');
// 入力済み文字列を表示するためのHTML要素（ここではtypedfieldという名前にする）を取得する
const typedfield = document.getElementById('typed');
// getElementById()メソッドで背景部分のHTML要素を取得
const wrap = document.getElementById('wrap');
// 定数stratへHTML要素IDのstratを代入する
const start = document.getElementById('start');


// 複数のテキストを格納する配列
const textLists =[
    'Hello World',
    'This is my App',
    'How are you?',
    'Today is sunny',
    'I love JavaScript!',
    'Good morning',
    'I am Japanese',
    'Let it be',
    'Samurai',
    'Typing Game',
    'Information Technology',
    'I want to be a programmer',
    'What day is today?',
    'I want to build a web app',
    'Nice to meet you',
    'Chrome Firefox Edge Safari',
    'machine learning',
    'Brendan Eich',
    'John Resig',
    'React Vue Angular',
    'Netscape Communications',
    'undefined null NaN',
    'Thank you very much',
    'Google Apple Facebook Amazon',
    'ECMAScript',
    'console.log',
    'for while if switch',
    'var let const',
    'Windows Mac Linux iOS Android',
    'programming'
];

// ランダムなテキスト表示 createTextの関数を作成する
const createText = () =>{

    // 正タイプした文字をクリア
    typed ='';
    typedfield.textContent = typed;

    let random = Math.floor(Math.random() * textLists.length);
    // 配列textListsのランダムをuntypedに代入する
    untyped = textLists[random];
    // 変数untypedを定数untypedfieldのtextContentプロパティに代入する
    untypedfield.textContent = untyped;
};


// キー入力判定
// イベントオブジェクトの中から、何のキーが入力されたのか（e.key）の情報を取得
const keyPress = e => {
    
    //誤タイプの場合
    if(e.key !== untyped.substring(0,1)) {
        wrap.classList.add('mistyped');
        // 100ms後に背景色を元に戻す
     setTimeout(() => {
        wrap.classList.remove('mistyped');
      }, 100);
        return;
    } 

    // 正タイプの場合
    // scoreのインクリメント加算
    score++;
    // 変数untypedの先頭文字を変数typedの末尾に追加
    typed += untyped.substring(0, 1);
    // 変数untypedに2文字目以降の文字列を再代入する
    untyped = untyped.substring(1);
    // 定数typedfieldのtextContentプロパティに変数typedを代入する
    typedfield.textContent = typed;
    // 定数untypedfieldのtextContentプロパティに変数untypedを代入する
    untypedfield.textContent = untyped;

    // テキストがなくなったら新しいテキストを表示
    if(untyped === '') {
        createText();
    }

};



// タイピングスキルのランク判定
const rankCheck = socre => {
    
    // テキストを格納する変数を作る
    let text = '';
  
    // スコアに応じて異なるメッセージを変数textに格納する
    if(score < 100) {
      text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
    } else if(score < 200) {
        text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;    
      } else if(score < 300) {
        text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;    
      } else if(score >= 300) {
        text = `あなたのランクはSです。\nおめでとうございます!`;    
      }
     
      // 生成したメッセージと一緒に文字列を返す
      return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;
};

// ゲームを終了
const gameover = id => {
    clearInterval(id);
    // ランクチェックの値を代入する
    const result = confirm(rankCheck(score));

    // OKボタンが押されたらリロードする
    if(result=== true) {
        window.location.reload();
    }
};

// カウントダウンタイマー
const timer = () => {
 
    // タイマー部分のHTML要素（p要素）を取得する
    let time = count.textContent;
  
    const id = setInterval(() => {
  
      // カウントダウンする１を減算する意味
      time--;
      count.textContent = time;
  
      // カウントが0になったらタイマーを停止する
      if(time <= 0) {
        gameover(id);
      }
    }, 1000);
  };

 // ゲームスタート時の処理
 start.addEventListener('click', () => {

    // カウントダウンタイマーを開始する
    timer();
 
    // ランダムなテキストを表示する
    createText();
  
    // スタートボタンをクリックしたら「スタート」ボタンを非表示にする
    start.style.display = 'none';
  
    // キーボードのイベント処理
    document.addEventListener('keypress', keyPress);
  });
  
  untypedfield.textContent = 'スタートボタンで開始';


