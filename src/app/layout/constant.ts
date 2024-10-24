import { Lesson } from "../components/icons/lessons.tsx";
import { Certificates } from "../components/icons/certificates.tsx";
import { LeaderBoard } from "../components/icons/leader-board.tsx";
import { Score } from "../components/icons/score.tsx";
import { Quiz } from "../components/icons/quiz.tsx"

export const menus = [
  {
    text: "Lessons",
    link: "/lessons",
    Icon: Lesson,
  },
  {
    text: "Quiz",
    link: "/quiz",
    Icon: Quiz,
  },
  {
    text: "Certificates",
    link: "",
    Icon: Certificates,
  },
  {
    text: "Leader Board",
    link: "",
    Icon: LeaderBoard,
  },
  {
    text: "Scores",
    link: "",
    Icon: Score,
  },
];
