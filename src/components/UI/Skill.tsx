export const Skill = ({ icon, name, url, color }: { icon: string, url: string, name: string, color: string }) => {
    return (
        <a href={url} target="_blank" style={{ color: color }} rel="noopener noreferrer" className="skill-text">
            <img src={icon} title={name} alt={name} className="skill-img" />{name}</a>
    )
}