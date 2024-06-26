export type HrRole = "SuperAdmin" | "Admin" | "TeamLeader" | "Recruiter"

export type HrStatus = "Active" | "Suspended"

export interface INewGroup{
    groupName:string
    teamLeader:string
}

