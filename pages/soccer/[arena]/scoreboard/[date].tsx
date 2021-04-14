import { useRouter } from 'next/router'

export default function SoccerDatedScoreboard() {
    const router = useRouter()
    const { arena, date } = router.query
    return (
        <h1>Soccer Dated Scoreboard ARENA: {arena} DATE: {date}</h1>
    )
}