import { IAddNewuser } from "@/interfaces/add-userinterface";
import { HrRole, HrStatus } from "@/interfaces/hr-intrerface"


export const HrRoleFilter:HrRole[]=["Admin","SuperAdmin","TeamLeader","Recruiter"]

export const HrStatusFilter:HrStatus[]=[
    "Active","Suspended"
]



export const usersTempList=[
    {
        fullName:"Badmus Blessing Joseph",
        phoneNumber:'+234903364755',
        DateOfBirth:"13-08-1990" ,  
        icon:"/avatar/user4.png",
        emailAddress:"email@gmail.com",
        createdOn:"04-06-2024",
        createdAt:'14-08-2023',
        editedBy:'Fagorusi Jeremiah',
        role:"Super Admin",
        editedAt:'13-08-2023',
        Nationality:"Nigeria",
        state:"Lagos",
        city:"Ikorodu",
        gender:"Male",
        maritalStatus:"Married",
        status:"Active",
        address:'Lorem ipsum dolor sit amet consectetur. Tempor aliquet arcu fusce pulvinar. Natoque ut tempus id ut. Convallis id eget proin egestas libero various. Nunc amet enim consectetur et sed.'
    },
    {
        fullName:"Oni Abisola Grace",
        phoneNumber:'+234903364755',
        DateOfBirth:"13-08-1990" ,  
        icon:"/avatar/user6.png",
        status:"Active",
        emailAddress:"email@gmail.com",
        createdOn:"04-06-2024",
        createdAt:'14-08-2023',
        editedBy:'Fagorusi Jeremiah',
        role:"Admin",
        editedAt:'13-08-2023',
        Nationality:"Nigeria",
        state:"Lagos",
        city:"Ikorodu",
        gender:"Female",
        maritalStatus:"Single",
        address:'Lorem ipsum dolor sit amet consectetur. Tempor aliquet arcu fusce pulvinar. Natoque ut tempus id ut. Convallis id eget proin egestas libero various. Nunc amet enim consectetur et sed.'
    },
    {
        fullName:"Ajao adekunle",
        phoneNumber:'+234903364755',
        DateOfBirth:"13-08-1990" ,  
        icon:"/avatar/user4.png",
        emailAddress:"email@gmail.com",
        createdOn:"04-06-2024",
        createdAt:'14-08-2023',
        editedBy:'Fagorusi Jeremiah',
        role:"Super Admin",
        editedAt:'13-08-2023',
        Nationality:"Nigeria",
        state:"Lagos",
        status:"Active",
        city:"Ikorodu",
        gender:"Male",
        maritalStatus:"Divorced",
        address:'Lorem ipsum dolor sit amet consectetur. Tempor aliquet arcu fusce pulvinar. Natoque ut tempus id ut. Convallis id eget proin egestas libero various. Nunc amet enim consectetur et sed.'
    },
    {
        fullName:"Okafor Ifeoma Obianuju",
        phoneNumber:'+234903364755',
        DateOfBirth:"13-08-1990" ,  
        icon:"/avatar/user5.png",
        emailAddress:"email@gmail.com",
        createdOn:"04-06-2024",
        createdAt:'14-08-2023',
        editedBy:'Fagorusi Jeremiah',
        role:"Super Admin",
        editedAt:'13-08-2023',
        Nationality:"Nigeria",
        state:"Lagos",
        status:"Active",
        city:"Ikorodu",
        gender:"Male",
        maritalStatus:"Single",
        address:'Lorem ipsum dolor sit amet consectetur. Tempor aliquet arcu fusce pulvinar. Natoque ut tempus id ut. Convallis id eget proin egestas libero various. Nunc amet enim consectetur et sed.'
    },
    {
        fullName:"Badmus Blessing Joseph",
        phoneNumber:'+234903364755',
        DateOfBirth:"13-08-1990" ,  
        icon:"/avatar/user6.png",
        emailAddress:"email@gmail.com",
        createdOn:"04-06-2024",
        createdAt:'14-08-2023',
        editedBy:'Fagorusi Jeremiah',
        role:"Team Leader",
        editedAt:'13-08-2023',
        Nationality:"Nigeria",
        state:"Lagos",
        status:"Active",
        city:"Ikorodu",
        gender:"Male",
        maritalStatus:"Married",
        address:'Lorem ipsum dolor sit amet consectetur. Tempor aliquet arcu fusce pulvinar. Natoque ut tempus id ut. Convallis id eget proin egestas libero various. Nunc amet enim consectetur et sed.'
    },
    {
        fullName:"Okafor Ifeoma Obianuju",
        phoneNumber:'+234903364755',
        DateOfBirth:"13-08-1990" ,  
        icon:"/avatar/user4.png",
        emailAddress:"email@gmail.com",
        createdOn:"04-06-2024",
        createdAt:'14-08-2023',
        editedBy:'Fagorusi Jeremiah',
        role:"Recruiter",
        editedAt:'13-08-2023',
        Nationality:"Nigeria",
        state:"Lagos",
        status:"Active",
        city:"Ikorodu",
        gender:"Female",
        maritalStatus:"Married",
        address:'Lorem ipsum dolor sit amet consectetur. Tempor aliquet arcu fusce pulvinar. Natoque ut tempus id ut. Convallis id eget proin egestas libero various. Nunc amet enim consectetur et sed.'
    },
]

export const mockHrUser: IAddNewuser = {
    firstName: "Badmus",
    middleName: "Blessing",
    lastName: "Joseph",
    phoneNumber: "+2349033647565",
    dateOfBirth: new Date("1990-08-13"),
    gender: "Male",
    maritalStatus: "Married",
    emailAddress: "email@gmail.com",
    city: "Ikorodu",
    state: "Lagos",
    nationality: "Nigeria",
    detailAddress: "Lorem ipsum dolor sit amet consectetur. Tempor aliquet arcu fusce pulvinar. Natoque ut tempus id ut. Convallis id eget proin egestas libero various. Nunc amet enim consectetur et sed.",
    role: "SuperAdmin",
    teamLeader: "------", // Assuming this means no team leader assigned
    status: "Active"
};


export const mockGroupList=[
    {
        groupName:"Adekunle Ajao",
        teamLeader:"Ajao Adekunle",
        createdBy:"Fagorusi Jeremiah",
        createdAt:"13-08-2024",
        editedBy:"Fagorusi Jeremiah",
        editedOn:"13-08-2024",
        teamMembers:[
            "Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao",
        ]
    },
    {
        groupName:"Helen Team",
        teamLeader:"Ajao Adekunle",
        createdBy:"Fagorusi Jeremiah",
        createdAt:"13-08-2024",
        editedBy:"Fagorusi Jeremiah",
        editedOn:"13-08-2024",
        teamMembers:[
            "Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao",
        ]
    },
    {
        groupName:"Okafor Team",
        teamLeader:"Ajao Adekunle",
        createdBy:"Fagorusi Jeremiah",
        createdAt:"13-08-2024",
        editedBy:"Fagorusi Jeremiah",
        editedOn:"13-08-2024",
        teamMembers:[
            "Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao",
        ]
    },
    {
        groupName:"Omoh Team",
        teamLeader:"Ajao Adekunle",
        createdBy:"Fagorusi Jeremiah",
        createdAt:"13-08-2024",
        editedBy:"Fagorusi Jeremiah",
        editedOn:"13-08-2024",
        teamMembers:[
            "Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao",
        ]
    },
    {
        groupName:"Adewale Team",
        teamLeader:"Ajao Adekunle",
        createdBy:"Fagorusi Jeremiah",
        createdAt:"13-08-2024",
        editedBy:"Fagorusi Jeremiah",
        editedOn:"13-08-2024",
        teamMembers:[
            "Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao",
        ]
    },
    {
        groupName:"Jerry Team",
        teamLeader:"Ajao Adekunle",
        createdBy:"Fagorusi Jeremiah",
        createdAt:"13-08-2024",
        editedBy:"Fagorusi Jeremiah",
        editedOn:"13-08-2024",
        teamMembers:[
            "Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao",
        ]
    },
    {
        groupName:"Hammed Team",
        teamLeader:"Ajao Adekunle",
        createdBy:"Fagorusi Jeremiah",
        createdAt:"13-08-2024",
        editedBy:"Fagorusi Jeremiah",
        editedOn:"13-08-2024",
        teamMembers:[
            "Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao","Adekunle Ajao",
        ]
    },
]