import { dbService } from "fbase";
import{useState} from "react";

const Home = () => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState("");

    const getNweets = async () => {
        const dbNweets = await dbService.collection("nweets").get();
        // dbNweets.forEach(document) =>
        console.log(dbNweets);
    }

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