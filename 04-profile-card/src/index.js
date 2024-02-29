import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css"

const data = {
    name: "Mark Edwards",
    bio: "Developer with nearly 30 years industry experience.  Senior solutions architect at Engage ESM.  When not writing code, I play RPGs or read books.  Also into fast cars and fast bikes.",
    avatar: {
        image: "./Mark_Edwards_213_400px_LinkedIn.jpg",
        altText: "Mark's profile picture.",
    },
    skills: [
        { skill: "JavaScript", level: "advanced", colour: "red" },
        { skill: "React", level: "beginner", colour: "lightgreen" },
        { skill: "C/C++", level: "intermediate", colour: "skyblue" },
        { skill: "Java", level: "intermediate", colour: "yellow" },
        { skill: "Svelte", level: "beginner", colour: "orangered" },
        { skill: "ServiceNow", level: "advanced", colour: "limegreen" },
    ],
}

function App() {
    return (
        <div className="card">
            <Avatar
                image={data.avatar?.image}
                altText={data.avatar?.altText}
            />
            <div className="data">
                <Bio name={data.name} bio={data.bio} />
                <SkillList
                    skills={data.skills}
                />
            </div>
        </div>
    );
}


function Avatar({ image, altText }) {
    return (
        <img className="avatar" src={image} alt={altText} />
    );
}


function Bio({ name, bio }) {
    return (
        <>
            <h1>{name}</h1>
            <p>{bio}</p>
        </>
    );
}


function SkillList({ skills }) {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill skill={skill.skill} level={skill.level} colour={skill.colour} />
            ))}
        </div>
    );
}


function Skill({ skill, level, colour }) {
    const emoji = (level === 'beginner' ? '👶' : (level === 'intermediate' ? '👍' : '💪'));

    return (
        <div className="skill" style={{ backgroundColor: colour }}>
            <p>{skill} {emoji}</p>
        </div >
    );
}


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);