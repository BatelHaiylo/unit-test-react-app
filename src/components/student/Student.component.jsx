export default function Student(props) {
    const {fName,lName,age,isOnTown} = props
    return ( 
        <div>
            <h1>{fName}  {lName}</h1>
            <p>{age}</p>
            <p>{isOnTown}</p>
        </div>
     );
}