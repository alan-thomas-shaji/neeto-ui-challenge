import dayjs from "dayjs";

export const formatWithShortDate = dateTime => dayjs(dateTime).fromNow();

export const formatWithDayAndDate = dateTime =>
  dayjs(dateTime).format("dddd, hh:mmA");
