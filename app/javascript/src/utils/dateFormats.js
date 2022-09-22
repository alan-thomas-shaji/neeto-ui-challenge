import dayjs from "dayjs";

const createdAgoFormat = dateString => dayjs(dateString).fromNow();

const createdAtFormat = dateString => dayjs(dateString).format("dddd, hh:mmA");

export { createdAgoFormat, createdAtFormat };
