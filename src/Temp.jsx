import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const TEST_MUTATION = gql`
  mutation TestMutation($msg: String, $num: Int) {
    testMutation(data: { msg: $msg, num: $num })
  }
`;

function Temp() {
  const [executeMutation] = useMutation(TEST_MUTATION);
  const [state, setState] = useState();

  const handleClick = async () => {
    try {
      const { data } = await executeMutation({
        variables: {
          msg: "test",
          num: 1,
        },
      });

      setState(data);
    } catch (error) {
      console.error("Mutation Error", error);
    }
  };

  console.log("Mutation Response", state);

  return (
    <div>
      Temp
      <button className="bg-green-300 p-5" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Temp;
