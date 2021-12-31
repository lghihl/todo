export default function Progress ( {completedCount, allCount} ) {
    return (
        <div className="progress">
            진행률 : {completedCount} / {allCount}
        </div>
    );
}