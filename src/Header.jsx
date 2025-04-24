function Header({count, clicks}) {
    return (
        <>
            <div className="scoreboard">Score: {count}</div>
            <div className="clicks">Clicks: {clicks}</div>
        </>
    )
}

export default Header