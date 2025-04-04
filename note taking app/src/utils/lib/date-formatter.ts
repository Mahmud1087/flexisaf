import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
export const formatRelativeTime = (timestamp: string): string => {
  return dayjs(timestamp).fromNow();
};
