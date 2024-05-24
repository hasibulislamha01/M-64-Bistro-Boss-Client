
const StatCard = ({icon, number, title}) => {
    return (
        <div className="flex items-center gap-8 bg-sky-200 rounded-lg p-8">
            <div className="text-3xl">{icon}</div>
            <div className="space-y-2">
                <h1 className="text-3xl">{number}</h1>
                <p className="text-xl">{title}</p>
            </div>
        </div>
    );
};

export default StatCard;