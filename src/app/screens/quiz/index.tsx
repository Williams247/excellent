import React from "react";
import { Main } from "../../layout/main.tsx";
import { Card } from "../../components/card/main.tsx";

export function Quiz() {
  return (
    <Main>
      <div className="h-full bg-[green]">
        <div className="flex justify-center items-center">
          <Card className="w-[40rem]"></Card>
        </div>
      </div>
    </Main>
  );
}
