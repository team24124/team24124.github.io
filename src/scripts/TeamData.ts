export interface TeamData {
    team_number:         number;
    games_played:        number;
    epa_total:           number;
    auto_total:          number;
    tele_total:          number;
    historical_epa:      number[];
    historical_auto_epa: number[];
    historical_tele_epa: number[];
    opr_total_vals:      number[];
    opr_auto_vals:       number[];
    opr_tele_vals:       number[];
    opr_end_vals:        number[];
    opr:                 number;
    opr_auto:            number;
    opr_tele:            number;
    opr_end:             number;
}

export function parseTeamData (json: Record<string, TeamData>, teamNumber: string): TeamData {
    return json[teamNumber];
}
