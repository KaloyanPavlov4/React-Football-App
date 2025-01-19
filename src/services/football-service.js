/* IMPORTANT
  The API that was previously used has a 10 calls per minute limit which can easily break the page.
  For the project's roadmap a backend is planned that will periodically fetch data from the API and save it to a database.
  While that is being developed the project uses static data.
  For more information check the github repository.
*/

/*const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = '/api'
const MATCH_STATUSES = ['TIMED', 'LIVE', 'IN_PLAY']*/
import leagues from '../data/leagues'
import cups from '../data/cups'
import leagueDetails from '../data/leagueDetails'
import teamDetails from '../data/teamDetails'


export async function getAllLeagues() {
  /*const response = await fetch(`${BASE_URL}/competitions`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return json.competitions.filter(competition => competition.type === 'LEAGUE')*/

  return leagues
}

export async function getAllCups() {
  /*const response = await fetch(`${BASE_URL}/competitions`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return json.competitions.filter(competition => competition.type === 'CUP')*/

  return cups
}

export async function getCompetition(competitionId) {
  /*const response = await fetch(`${BASE_URL}/competitions/${competitionId}`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return json*/

  return leagueDetails.find(l => l.id === competitionId)
}

export async function getStandings(competitionId) {
  /*const response = await fetch(`${BASE_URL}/competitions/${competitionId}/standings`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return json.standings[0]*/

  return leagueDetails.find(l => l.id === competitionId).standings
}

export async function getTopScorers(competitionId){
  /*const response = await fetch(`${BASE_URL}/competitions/${competitionId}/scorers`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return json.scorers*/

  return leagueDetails.find(l => l.id === competitionId).scorers
}

export async function getUpcomingMatches(competitionId) {
  /*const response = await fetch(`${BASE_URL}/competitions/${competitionId}/matches`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  const json = await response.json()
  return json.matches.filter(match => MATCH_STATUSES.includes(match.status))*/

  return leagueDetails.find(l => l.id === competitionId).matches
}

export async function getTeam(teamId) {
  /*const response = await fetch(`${BASE_URL}/teams/${teamId}`, {
    headers: {
      'X-Auth-Token' : API_KEY
    }
  })

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }

  return await response.json()*/

  return teamDetails.find(t => t.id === teamId)
}

