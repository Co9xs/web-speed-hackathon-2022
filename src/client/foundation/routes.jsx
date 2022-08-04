import loadable from "@loadable/component";
import React from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";

import { CommonLayout } from "./layouts/CommonLayout";

const Top = loadable(() => import("./pages/Top"));
const RaceCard = loadable(() => import("./pages/races/RaceCard"));
const Odds = loadable(() => import("./pages/races/Odds"));
const RaceResult = loadable(() => import("./pages/races/RaceResult"));

/** @type {React.VFC} */
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route element={<CommonLayout />} path="/">
        <Route index element={<Top />} />
        <Route element={<Top />} path=":date" />
        <Route path="races/:raceId">
          <Route element={<RaceCard />} path="race-card" />
          <Route element={<Odds />} path="odds" />
          <Route element={<RaceResult />} path="result" />
        </Route>
      </Route>
    </RouterRoutes>
  );
};
