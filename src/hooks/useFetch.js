import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null); // api에서 응답받은 데이터 =json객체

    useEffect(() => {
        if (!url) return; // url이 없으면 아무것도 하지 않음
        fetch(url) // fetch시작
        .then((response) => {
            if (!response.ok) {
                throw new Error("API 요청 실패"); // 응답없으면 요청 실패 
                return response.json();
        }})
        .then((json) => setData(json)) // 성공하면 setData로 응답값 초기화
    }, [url]);
    return { data }; // 응답 json 객체 반환
}