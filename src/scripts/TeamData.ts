export interface TeamData {
    team_number: number;
    games_played: number;
    epa_total: number;
    auto_total: number;
    tele_total: number;
    historical_epa: number[];
    historical_auto_epa: number[];
    historical_tele_epa: number[];
    opr_total_vals: number[];
    opr_auto_vals: number[];
    opr_tele_vals: number[];
    opr_end_vals: number[];
    opr: number;
    opr_auto: number;
    opr_tele: number;
    opr_end: number;
}

export interface EventData {
    event_code: string;
    team_list:  number[];
}

export function parseTeamData(json: Record<string, TeamData>, teamNumber: string): TeamData {
    return json[teamNumber];
}

export function parseAllTeamData(json: Record<string, TeamData>) {
    const teamData: (string | number)[][] = [];
    const teams = Object.entries(json)

    teams.map(([key, data]) => {
        teamData.push([
            key, 
            data.epa_total.toFixed(2), 
            data.auto_total.toFixed(2), 
            data.tele_total.toFixed(2),
            data.opr.toFixed(2),
            data.opr_auto.toFixed(2),
            data.opr_tele.toFixed(2),
            data.opr_end.toFixed(2),
        ])
    })
    
    return teamData;
}

export function parseTeamDataFromEventCode(json: Record<string, TeamData>, events: Record<string, EventData>, event: string) {
    const teamData: (string | number)[][] = [];

    if(!Object.keys(events).includes(event)) return null;

    events[event].team_list.forEach(team => {
        let data = json[team.toString()]
        teamData.push([
            team.toString(),
            data.epa_total.toFixed(2),
            data.auto_total.toFixed(2), 
            data.tele_total.toFixed(2),
            data.opr.toFixed(2),
            data.opr_auto.toFixed(2),
            data.opr_tele.toFixed(2),
            data.opr_end.toFixed(2),
        ])
    });

    return teamData;
}
