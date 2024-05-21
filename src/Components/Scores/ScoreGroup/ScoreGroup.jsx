export default function ScoreGroup(prop) {
    debugger;
    const scoreGroup = prop.scoreGroup
    return (
        <>
        {prop.children}
            {scoreGroup.map(([key, value], i) => <div key={i}>
                <div>{key}</div>   <div>{value}</div>
            </div>)
            }
        </>
    )
}