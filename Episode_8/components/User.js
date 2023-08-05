const User = ({name, location, dev, age}) => {
    return(
        <div className="user-card">
            <h1>{name}</h1>
            <h2>{dev}</h2>
            <h3>location: {location}</h3>
            <h4>age: {age}</h4>

        </div>
    );
};
export default User;