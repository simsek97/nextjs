import { useRouter } from 'next/router'

export default function SoccerDatedScoreboard() {
    const router = useRouter()
    const { league, date } = router.query
    return (
        <h1>Soccer Dated Scoreboard LEAGUE: {league} DATE: {date}</h1>
    )
}
