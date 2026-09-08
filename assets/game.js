/* ============================================================
   도서관 길찾기 게임 설정
   - 단계별 장소/정답/안내문은 아래 stages에서 수정
   - 마지막 보상 화면 문구는 reward에서 수정
   ============================================================ */
window.GAME_CONFIG = {
  title: "도서관을 찾아라!",
  intro: "사진 속 장소를 하나씩 맞히고 길을 따라가면 도서관에 도착할 수 있어요!",
  stages: [
    {
      image: "assets/police.svg",
      imageAlt: "경찰서를 나타내는 그림",
      question: "첫 번째 사진 속 장소는 어디일까요?",
      answers: ["경찰서", "파출소"],
      successText: "정답! 경찰서를 찾았어요. 다음 장소로 이동해 볼까요?",
      arrow: "➡️",
      hint: "경찰관이 우리 동네의 안전을 지켜주는 곳이에요."
    },
    {
      image: "assets/cinema.svg",
      imageAlt: "메가박스를 나타내는 그림",
      question: "두 번째 사진 속 장소는 어디일까요?",
      answers: ["메가박스", "영화관"],
      successText: "정답! 메가박스를 찾았어요. 다음 장소로 출발!",
      arrow: "⬅️",
      hint: "커다란 화면으로 영화를 볼 수 있는 곳이에요."
    },
    {
      image: "assets/supermarket.svg",
      imageAlt: "슈퍼를 나타내는 그림",
      question: "세 번째 사진 속 장소는 어디일까요?",
      answers: ["슈퍼", "슈퍼마켓", "마트"],
      successText: "잘했어요! 슈퍼를 찾았어요. 이제 한 곳만 더 찾으면 돼요!",
      arrow: "⬆️",
      hint: "과자, 음료수, 생활용품 등을 살 수 있는 곳이에요."
    },
    {
      image: "assets/convenience.svg",
      imageAlt: "편의점을 나타내는 그림",
      question: "마지막 사진 속 장소는 어디일까요?",
      answers: ["편의점"],
      successText: "정답! 마지막 장소까지 모두 찾았어요. 도서관에 도착했습니다!",
      arrow: "📚",
      hint: "간식이나 음료를 쉽게 살 수 있고 늦은 시간에도 문을 여는 곳이 많아요."
    }
  ],
  reward: {
    title: "도서관 도착!",
    message: "축하해요! 4개의 장소를 모두 맞히고 도서관에 도착했어요.",
    instruction: "이 화면을 사서 선생님에게 보여주면 상품을 받을 수 있어요!"
  }
};

window.normalizeAnswer = function(v){
  return (v || "").toString().trim().toLowerCase().replace(/\s+/g, "").replace(/[.!?,·ㆍ_-]/g, "");
};

window.isCorrect = function(value, answers){
  const v = window.normalizeAnswer(value);
  return (answers || []).some(a => window.normalizeAnswer(a) === v);
};
