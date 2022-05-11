import{useState} from "react";

const Home = () => {
    const [nweet, setNweet] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: {value},
        } = event;
        setNweet(value);
    };
    return(
        <form onSubmit={onSubmit}>
            <input value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="on my mind"
                    maxLength={120}
                    >
            </input>

        </form>
    )
    
}


export default Home;