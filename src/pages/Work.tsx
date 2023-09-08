const Work = (props: any) => {

    console.log(props);
    
    return(
        <>
        <h3>{props.work.title}</h3>
        <p>{props.work.content}</p>
        </>
    )
}

export default Work