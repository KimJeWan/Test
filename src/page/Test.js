import { useParams } from "react-router-dom";

const Test = () => {

    const testUP = useParams()
    return (
        <>
          <div>
             {testUP.id}
          </div>
        </>
    )
}

export default Test;