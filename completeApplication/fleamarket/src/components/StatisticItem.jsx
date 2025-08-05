import UserIcon from "../svg/UserIcon";

function StatisticItem ({headline, statInfo}){
    return (
        <div className="statItem">
            <h2>{headline}</h2>
            <UserIcon></UserIcon>
            <div className="subtitle">{statInfo}</div>
        </div>
    );
}
export default StatisticItem