const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = '/api'
const MATCH_STATUSES = ['TIMED', 'LIVE', 'IN_PLAY']

export async function getAllLeagues() {
  const response = await fetch(`${BASE_URL}/competitions`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return json.competitions.filter(competition => competition.type === 'LEAGUE')
}

export async function getAllCups() {
  const response = await fetch(`${BASE_URL}/competitions`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return json.competitions.filter(competition => competition.type === 'CUP')
}

export async function getStandings(competitionId) {
  const response = await fetch(`${BASE_URL}/competitions/${competitionId}/standings`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return { competition: json.competition, season: json.season, standings: json.standings }

}

export async function getTopScorers(competitionId){
  const response = await fetch(`${BASE_URL}/competitions/${competitionId}/scorers`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return { competition: json.competition, season: json.season, scorers: json.scorers }
}

export async function getUpcomingMatches(competitionId) {
  const response = await fetch(`${BASE_URL}/competitions/${competitionId}/matches`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return { competition: json.competition, season: json.season, matches: json.matches.filter(match => MATCH_STATUSES.includes(match.status)) }
}

export async function getTeam(teamId) {
  const response = await fetch(`${BASE_URL}/teams/${teamId}`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  return await response.json()
}

