const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    console.log('ボタンをクリックしました');
    
    setTimeout (() => {
        // setTimeout内に変更するテキスト内容を入れる
        text.textContent = 'ボタンをクリックしました';
        // 実行する
        console.log('')
    }, 2000);
});
