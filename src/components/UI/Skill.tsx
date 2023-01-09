export const Skill = ({ icon, name, url }: { icon: string, url: string, name: string }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="skill-text"><img src={icon} title="Git" alt="Git" className="skill-img" />{name}</a>
    )
}