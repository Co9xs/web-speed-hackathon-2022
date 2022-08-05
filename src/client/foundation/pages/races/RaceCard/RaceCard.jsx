import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../../../components/layouts/Container";
import { Section } from "../../../components/layouts/Section";
import { Spacer } from "../../../components/layouts/Spacer";
import { TrimmedImage } from "../../../components/media/TrimmedImage";
import { TabNav } from "../../../components/navs/TabNav";
import { Heading } from "../../../components/typographies/Heading";
import { useFetch } from "../../../hooks/useFetch";
import { Color, Radius, Space } from "../../../styles/variables";
import { formatTime } from "../../../utils/DateUtils";
import { jsonFetcher } from "../../../utils/HttpUtils";

import { EntryTable } from "./internal/EntryTable";
import { PlayerPictureList } from "./internal/PlayerPictureList";

const LiveBadge = styled.span`
  background: ${Color.red};
  border-radius: ${Radius.SMALL};
  color: ${Color.mono[0]};
  font-weight: bold;
  padding: ${Space * 1}px;
  text-transform: uppercase;
`;

/** @type {React.VFC} */
export const RaceCard = () => {
  const { raceId } = useParams();
  const { data } = useFetch(`/api/races/${raceId}`, jsonFetcher);

  return (
    <Container>
      <Spacer mt={Space * 2} />
      <Heading as="h1">{data ? data.name : "loading race name..."}</Heading>
      {data ? (
        <p>
          開始 {formatTime(data.startAt)} 締切 {formatTime(data.closeAt)}
        </p>
      ) : (
        <p>開始 ..:.. 締切 ..:..</p>
      )}

      <Spacer mt={Space * 2} />

      <Section dark shrink>
        <LiveBadge>Live</LiveBadge>
        <Spacer mt={Space * 2} />
        {data ? (
          <TrimmedImage
            height={225}
            src={data?.image}
            width={400}
          />
        ) : (
          <div
            style={{
              border: "1px solid black",
              height: "225px",
              width: "400px",
            }}
          />
        )}
      </Section>

      <Spacer mt={Space * 2} />

      <Section>
        <TabNav>
          <TabNav.Item aria-current to={`/races/${raceId}/race-card`}>
            出走表
          </TabNav.Item>
          <TabNav.Item to={`/races/${raceId}/odds`}>オッズ</TabNav.Item>
          <TabNav.Item to={`/races/${raceId}/result`}>結果</TabNav.Item>
        </TabNav>

        <Spacer mt={Space * 2} />
        <PlayerPictureList>
          {data?.entries
            ? data.entries.map((entry) => (
                <PlayerPictureList.Item
                  key={entry.id}
                  image={entry.player.image}
                  name={entry.player.name}
                  number={entry.number}
                />
              ))
            : [...new Array(10)].map((_, i) => (
                <PlayerPictureList.PlaceHolder key={i} />
              ))}
        </PlayerPictureList>

        <Spacer mt={Space * 4} />
        <EntryTable
          entries={
            data?.entries
              ? data.entries
              : [...new Array(10)].map((_, i) => ({
                  comment: "loading",
                  first: "",
                  firstRate: 0,
                  number: i + 1,
                  others: "",
                  paperWin: "",
                  player: {
                    name: "loading",
                  },
                  predictionMark: "",
                  rockWin: "",
                  scissorsWin: "",
                  second: "",
                  third: "",
                  thirdRate: 0,
                }))
          }
        />
      </Section>
    </Container>
  );
};
