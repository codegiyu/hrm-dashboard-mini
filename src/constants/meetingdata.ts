export type Meeting = {
    id: number;
    title: string;
    date: {
        day: string;
        date: number;
    };
    time: {
        startTime: string;
        endTime: string;
    };
};
  