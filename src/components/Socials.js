

function Socials(props) {
    const {link, icon, label} = props;
    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
            <i className={icon} aria-hidden="true" style={{height:"20px", width: "20px", margin: "5px"}}/>
        </a>
    );
}
     


export default Socials;