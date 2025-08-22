import styled from "styled-components";

const StyledSection = styled.section`
    display: flex;
    align-items: center;
    color: black;
    background-color: #c6e2fe;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 12px 0;
    max-width: 320px;
    flex-direction: column;
`;

export default function WeatherItem({ item }) {
    const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
    return (
        <StyledSection>
            <h4>{new Date(item.dt * 1000).toLocaleDateString()}</h4>
            <div>{item.weather[0].description}</div>
            <div>
                <img src={iconUrl} alt="" />
                {item.main.temp} °C{" "}
            </div>
        </StyledSection>
    );
}
