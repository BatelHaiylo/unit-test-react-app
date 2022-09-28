export default function Student(props) {
    const {fName,lName,age,isOnTown} = props
    return ( 
        <div>
            <h1 data-testid="fName-header">{fName}</h1>
            <h1 data-testid="lName-header">{lName}</h1>
            <p data-testid="age-header">{age}</p>
            <p data-testid="bool-header">{isOnTown}</p>
        </div>
     );
}