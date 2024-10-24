import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Main } from "../../layout/main.tsx";
import { TextInput } from "../../components/widgets/input/text-input.tsx";
import { Lesson } from "../../components/icons/lessons.tsx";
import { Card } from "../../components/card/main.tsx";
import { data } from "./data.ts";

const searchSchema = z.object({
  search: z.string(),
});

type searchSchemaType = z.infer<typeof searchSchema>;

export function Lessons() {
  const formHook = useForm<searchSchemaType>({
    resolver: zodResolver(searchSchema),
    mode: "onChange",
  });

  return (
    <Main>
      <div className="flex justify-between">
        <div className="flex gap-1 mt-3">
          <Lesson />
          <p className="text-base">Lessons</p>
        </div>

        <div className="w-[15rem]">
          <TextInput
            handler={formHook}
            name="search"
            className="w-full text-sm"
            placeholder="Search lesson"
          />
        </div>
      </div>

      <div className="flex justify-between mt-10 flex-wrap">
        {data.map(({ title, description }, index) => (
          <Card className="w-[32%] py-2 mt-5" key={index}>
            <p className="text-sm font-[600]">{title}</p>
            <p className="text-sm mt-1">{description}</p>
            <button className="text-sm underline mt-2">See more...</button>
          </Card>
        ))}
      </div>
    </Main>
  );
}
