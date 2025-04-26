import React from "react";
import { WithContext as ReactTags, SEPARATORS, type Tag } from "react-tag-input";
import { parseTeamData, type TeamData } from "../scripts/TeamData"
import jsonData from "../data/Alberta_team_data.json"

function getAllValidTeams(jsonData: Record<string, TeamData>): Tag[] {
    let teamNumbers = Object.keys(jsonData);
    let validTeams: Tag[] = [];

    teamNumbers.forEach((teamNumber) => {
        validTeams.push({ id: teamNumber, text: teamNumber, className: ''})
    })
    return validTeams;
}

export default function TeamSelector(){
    var initial: Tag[] = [{ id: "24124", text: "24124", className: ''}, { id: "26145", text: "26145", className: ''}]

    const [teams, setTeams] = React.useState<Array<Tag>>(initial);

    const updateGraph = (teams: Tag[]) => {
        let data: TeamData[] = []
        teams.forEach((team) => {
            data.push(parseTeamData(jsonData, team.id))
        })
        const event = new CustomEvent('teamSelectionUpdate', { detail: data });
        window.dispatchEvent(event);
    }

    // Tag Logic
    const onDelete = (index: number) => {
        updateGraph(teams.filter((_, i) => i !== index))
        setTeams(teams.filter((_, i) => i !== index));
    };
    
    const onAdd = (team: Tag) => {
        // Prevent teams not in the data to be added
        if(getAllValidTeams(jsonData).some(teamNumber => teamNumber.id == team.id)){
            setTeams((prevTeams) => {
                updateGraph([...prevTeams, team]);
                return [...prevTeams, team];
            });
        }
    };

    const onDrag = (team: Tag, currPos: number, newPos: number) => {
        const newTeams = teams.slice();
        newTeams.splice(currPos, 1);
        newTeams.splice(newPos, 0, team);
        // re-render
        updateGraph(newTeams)
        setTeams(newTeams);
    };  
        
    const onClearAll = () => {
        updateGraph([])
        setTeams([]);
    };

    

    return (
        <div id="teamSelector">
            <ReactTags
                tags={teams}
                suggestions={getAllValidTeams(jsonData)}
                separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
                handleDelete={onDelete}
                handleAddition={onAdd}
                handleDrag={onDrag}
                inputFieldPosition="bottom"
                placeholder="Enter valid team numbers."
                clearAll
                onClearAll={onClearAll}/>
        </div>
        
    )
}