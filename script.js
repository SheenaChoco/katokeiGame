// ========================================
// ランダムに1つ選ぶ
// ========================================

function getRandomItem(array) {
    const index = Math.floor(Math.random() * array.length);

    return array[index];
}


// ========================================
// 配列をシャッフルする
// ========================================

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}


// ========================================
// 1問分の選択肢を作る
// ========================================

function createQuestion() {

    // 問題グループを1つ選ぶ
    const group = getRandomItem(wordGroups);

    // 正解を取得する
    const answer = group.answer;

    // 偽物候補をコピーする
    const fakeChoices = [...group.choices];

    // 偽物候補をシャッフルする
    shuffle(fakeChoices);

    // 偽物を3つ選ぶ
    const selectedFakes = fakeChoices.slice(0, 3);

    // 正解＋偽物3つをまとめる
    const choices = [
        answer,
        ...selectedFakes
    ];

    // 選択肢の順番をランダムにする
    shuffle(choices);

    return {
        answer: answer,
        choices: choices
    };
}


// ========================================
// 問題を作る
// ========================================

const question = createQuestion();


// ========================================
// HTMLの「選択肢を入れる場所」を取得する
// ========================================

const choicesElement = document.getElementById("choices");


// ========================================
// 4つの選択肢を画面に表示する
// ========================================

question.choices.forEach(function(choice) {

    const button = document.createElement("button");

    button.classList.add("choice");

    button.textContent = choice;


    // ボタンがクリックされたときの処理
    button.addEventListener("click", function() {

        if (choice === question.answer) {
            alert("正解！");
        } else {
            alert("不正解！");
        }

    });


    choicesElement.appendChild(button);

});