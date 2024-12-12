// 定数Btnへhtmlのbtn要素を代入する
const Btn = document.getElementById('btn');
// 定数Textへhtmlのtext要素を代入する
const Text = document.getElementById('text');

// Btnをクリックしたら（）
Btn.addEventListener('click', () => {
    // 定数Btnをクリックしたら定数Textにボタンをクリックしましたを代入する
   Text.textContent = 'ボタンをクリックしました！';
});