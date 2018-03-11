export default function formatDate(dateString: string) {
    const fullDate = new Date(dateString).toLocaleTimeString('en-GB', {
        month: 'short',
        day: 'numeric',
    });

    const [date, time] = fullDate.split(', ');

    return {
        date,
        time: time.slice(0, 5),
    };
}
