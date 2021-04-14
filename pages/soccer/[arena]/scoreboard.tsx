import { useRouter } from 'next/router'

export default function SoccerScoreboard() {

  const router = useRouter()
  const { arena } = router.query
  return (
    <h1>Soccer Scoreboard ARENA : {arena} </h1>
  )
}