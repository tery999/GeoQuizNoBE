export default function ScoreGroup(prop) {
    debugger;
    const scoreGroup = prop.scoreGroup
    return (
        <>
        <h2>{prop.children}</h2>
            {scoreGroup.map(([key, value], i) => <div key={i}>
                <div>{key}</div>   <div>{value}</div>
            </div>)
            }
        </>
    )
}