import { Form } from "ink-form";
import React, { useState } from "react";

export type Config = {
  size: number;
  regions: number;
};

type Props = {
  onSubmit: (config: Config) => void;
};

export function ConfigGameForm(props: Props): JSX.Element {
  const [config, setConfig] = useState<{ size?: number; regions?: number }>();
  return (
    <Form
      onSubmit={(params) => props.onSubmit(params as Config)}
      form={{
        title: "Begüm's Map Game. Configure your world.",
        sections: [
          {
            title: "Map size",
            fields: [
              {
                type: "integer",
                name: "size",
                initialValue: 10,
                onChange: (value: number) => {
                  setConfig({
                    ...config,
                    size: value,
                  });
                },
                required: true,
              },
              {
                type: "integer",
                name: "Number of regions",
                initialValue: 5,
                onChange: (value: number) => {
                  setConfig({
                    ...config,
                    regions: value,
                  });
                },
                required: true,
              },
            ],
          },
        ],
      }}
    />
  );
}
