
/*
    This file exists to test project data being listed, to prevent too many DB fetch requests.
*/

import { Project } from "./types"

export const DummyProjectData: Project[] = [
    {
        project_name: "Neon Rain",
        project_img: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/NeonRainGameplay.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy9OZW9uUmFpbkdhbWVwbGF5LlBORyIsImlhdCI6MTcwMTgxODIwNCwiZXhwIjoxNzMzMzU0MjA0fQ.uAztS9tc3z9yW0w-lTH_eYUk0wTqvibLlAN8R5Q0q_U&t=2023-12-05T23%3A16%3A37.239Z",
        tech_used: ["Unity", "C#"],
        project_description: "A 2D top-down shooter game made within the Unity engine.",
        links: ["", ""]
    },
    {
        project_name: "HRF: Asylum Reports Generator",
        project_img: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/HRF-Banner2.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy9IUkYtQmFubmVyMi5QTkciLCJpYXQiOjE3MDE5NjM5NTAsImV4cCI6MTczMzQ5OTk1MH0.8WbpOP83iGNPwxQG5C_Aw1c1ykFGtfndOisrRXwqPVQ&t=2023-12-07T15%3A45%3A50.874Z",
        tech_used: ["JavaScript", "Node", "Redux", "React"],
        project_description: "A tool to explore USCIS data on Asylum Office decisions.",
        links: ["", ""]
    },
    {
        project_name: "Weather App",
        project_img: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/WeatherApp.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy9XZWF0aGVyQXBwLlBORyIsImlhdCI6MTcwMTgxODU5MiwiZXhwIjoxNzMzMzU0NTkyfQ.dRrEXeHTY51besLyD2PHIathMEbDYQ8G8aTM29cklhI&t=2023-12-05T23%3A23%3A05.422Z",
        tech_used: ["JavaScript", "Node", "React"],
        project_description: "A React website that can tell you the weather/conditions of any city.",
        links: ["", ""]
    },
    {
        project_name: "Portfolio Website",
        project_img: "https://bwsrltsxndfbxnthgmlt.supabase.co/storage/v1/object/sign/Personal%20Projects/PortfolioWebsite.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQZXJzb25hbCBQcm9qZWN0cy9Qb3J0Zm9saW9XZWJzaXRlLlBORyIsImlhdCI6MTcwMTgxODUwNiwiZXhwIjoxNzMzMzU0NTA2fQ.lkoBnMjc3rCpiGZ2IPYIfGghADF_-h9XFYKNV7-9FJk&t=2023-12-05T23%3A21%3A39.320Z",
        tech_used: ["JavaScript", "Node", "React"],
        project_description: "A React website built to showoff all of my projects.",
        links: ["", ""]
    },
]