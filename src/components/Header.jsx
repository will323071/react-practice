export default function Header({data}) {
    // 일출일몰시간 변환
    const formatTime = (time) => {
        const date = new Date(time * 1000);
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    };
    
    return (
        <>
        {data && <div>{data.city.name}</div>}
        {data && (
            <>
            <div>
                {data.city.name}의 일출 시간 {formatTime(data.city.sunrise)}
            </div>
            <div>
                {data.city.name}의 일몰 시간 {formatTime(data.city.sunset)}
            </div>
            </>
        )}
        </>
    );
}
