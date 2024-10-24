import React from "react";
import { Main } from "../../layout/main.tsx";
import { Card } from "../../components/card/main.tsx";
import { Radio } from "../../components/widgets/input/radio.tsx";
import { Button } from "../../components/widgets/button/index.tsx";
import { Clock } from "../../components/icons/clock.tsx";

export function Quiz() {
  return (
    <Main>
      <div className="h-full flex flex-col justify-center">
        <div className="flex justify-center">
          <Card className="w-[40rem] px-16">
            <div className="flex justify-center">
              <div className="flex gap-1 mb-2">
                <Clock /> <p className="text-sm font-bold">1:20:34</p>
              </div>
            </div>
            <p className="text-center font-bold text-base">
              Who was the founder of JavaScript?
            </p>
            <div class="flex justify-center mt-3 gap-3">
              <div className="flex gap-4 mt-1">
                <Radio text="Bill Gate" />
                <Radio text="Steve Jobs" />
                <Radio text="Brendan Eich" />
                <Radio text="Sandro Rossel" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex gap-4 w-[60%] mt-5">
                <Button>Previous</Button>
                <Button>Next</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Main>
  );
}
