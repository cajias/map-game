import React, { useState } from "react";
import { Box } from "ink";
import { World } from "../components/World";
import { Config, ConfigGameForm } from "../components/ConfigGameForm";

export function App(): JSX.Element {
  return <Counter />;
}

function Counter(): JSX.Element {
  // const [counter, setCounter] = useState(0);
  //
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCounter((previousCounter) => previousCounter + 1);
  //   }, 100);
  //
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  //
  // return <Text color="green">{counter} tests passed</Text>;

  const [config, setConfig] = useState<Config | undefined>();
  return (
    <Box flexDirection="column" paddingX={2} paddingY={1}>
      {config ? (
        <World regions={config.regions} size={config.size} />
      ) : (
        <ConfigGameForm
          onSubmit={(c) => {
            setConfig(c);
          }}
        />
      )}
    </Box>
  );
}
