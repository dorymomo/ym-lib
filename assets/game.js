/* ============================================================
   수정은 여기만 하면 됩니다.
   - title/intro : 시작화면 문구
   - stages      : 단계별 사진, 정답, 길 안내
   - final       : 마지막 도서관 이름
   - reward      : 성공 후 보상 문구
   ============================================================ */
window.GAME_CONFIG = {
  title: "도서관을 찾아라!",
  intro: "사진 속 장소를 맞히고 길 안내를 따라가며 마지막 도서관을 찾아보세요.",
  stages: [
    {
      image: "assets/police.svg",
      imageAlt: "경찰서를 나타내는 그림",
      question: "첫 번째 사진 속 장소는 어디일까요?",
      answers: ["경찰서", "파출소"],
      successText: "맞았어요! 경찰서에서 오른쪽으로 가요.",
      arrow: "➡️",
      hint: "사람들을 안전하게 지켜주는 곳이에요."
    },
    {
      image: "assets/cinema.svg",
      imageAlt: "영화관을 나타내는 그림",
      question: "두 번째 사진 속 장소는 어디일까요?",
      answers: ["메가박스", "영화관"],
      successText: "정답! 메가박스에서 왼쪽으로 가요.",
      arrow: "⬅️",
      hint: "큰 화면으로 영화를 보는 곳이에요."
    },
    {
      image: "assets/cafe.svg",
      imageAlt: "카페를 나타내는 그림",
      question: "세 번째 사진 속 장소는 어디일까요?",
      answers: ["카페", "커피숍"],
      successText: "잘했어요! 카페를 지나 앞으로 쭉 가요.",
      arrow: "⬆️",
      hint: "음료와 간식을 먹을 수 있는 곳이에요."
    },
    {
      image: "assets/park.svg",
      imageAlt: "공원을 나타내는 그림",
      question: "마지막 사진 속 장소는 어디일까요?",
      answers: ["공원", "어린이공원"],
      successText: "거의 다 왔어요! 공원 옆에서 도서관을 찾아보세요.",
      arrow: "📚",
      hint: "나무와 벤치가 있고 산책할 수 있는 곳이에요."
    }
  ],
  final: {
    question: "우리가 도착한 도서관의 이름은 무엇일까요?",
    answers: ["우리동네도서관", "우리 동네 도서관"],
    hint: "실제 행사에서는 여기에 진짜 도서관 이름을 넣으면 됩니다."
  },
  reward: {
    title: "도서관 탐험 성공!",
    message: "모든 길을 잘 찾아왔어요. 정말 멋져요!",
    code: "LIBRARY-STAR"
  }
};

window.normalizeAnswer = function(v){
  return (v || "").toString().trim().toLowerCase().replace(/\s+/g, "").replace(/[.!?,·ㆍ_-]/g, "");
};

window.isCorrect = function(value, answers){
  const v = window.normalizeAnswer(value);
  return (answers || []).some(a => window.normalizeAnswer(a) === v);
};
