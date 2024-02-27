import { Typography } from "@mui/material";
import FeedbackModal from "../components/modals/FeedbackModal/FeedbackModal";


export default function Website() {
  return (
    <div>
      <FeedbackModal />
      <Typography variant="h4">
        Индивидуальные Решения для Вашего Бизнеса:
      </Typography>
      <Typography variant="h4">
        Создаем Уникальные и Продуктивные Веб-Сайты
      </Typography>
    </div>
  );
}
