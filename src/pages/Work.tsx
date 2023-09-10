const Work = (props: any) => {
    
    return(
        <div style={{backgroundColor: props.work.color}}>
        <h3>{props.work.title}</h3>
        <p>{props.work.content}</p>
        </div>
    )
}

export default Work