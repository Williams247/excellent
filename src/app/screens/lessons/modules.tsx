import React, { useMemo } from "react";
import { useParams } from "react-router-dom"
import { Main } from "../../layout/main.tsx";
import { data } from "../lessons/data.ts"

export function Modules() {
  const page = useParams();
  console.log(page.id);

  const id = useMemo(() => {
    if (page.id) return Number(page.id) - 1;
  }, [page.id]);
  
  return (
    <div>
      <Main>
        <p className="text-2xl font-bold">{data[id].title}</p>
        <p>{data[id].description}</p>
      </Main>
    </div>
  );
}
