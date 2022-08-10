import moment from "moment";
import "moment/locale/es";

export default function useDate() {
  moment.locale("es");
  const fromNow = (date) => {
    return moment(date).fromNow();
  };
  return { fromNow };
}
